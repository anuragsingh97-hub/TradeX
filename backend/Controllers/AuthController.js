const User = require("../models/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");
const { FundsModel } = require("../models/FundsModel");
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});


//signup router

module.exports.signup = async (req, res, next) => {
  try {
    const { username, email, password, mobile, dob, gender, createdAt } =
      req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.json({
        message: "User already exists",
      });
    }

    const user = await User.create({
      username,
      email,
      password,
      mobile,
      dob,
      gender,
      createdAt,
    });
    console.log("User Created:", user._id);
    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });
    const fund = await FundsModel.create({
      userId: user._id,
      availableCash: 100000,
      openingBalance: 100000,
      usedMargin: 0,
    });
    console.log("Fund Created:", fund);
    return res.status(200).json({
      message: "User registered successfully",
      success: true,
      funds: {
        availableCash: 100000,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

//login router

module.exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: "All fields are required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "Incorrect password or email" });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect password or email" });
    }
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });
    return res
      .status(201)
      .json({ message: "User logged in successfully", success: true });
  } catch (error) {
    console.error(error);
  }
};

//logout

module.exports.logout = async (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  });
  res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
};

//reser password

module.exports.resetPassword = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }

  user.password = password; // plain password

  user.otp = null;
  user.otpExpiry = null;

  await user.save();

  res.json({
    success: true,
    message: "Password updated",
  });
};

//verifying otp

module.exports.verifyOTP = async (req, res) => {
  const { email, otp } = req.body;

  const user = await User.findOne({ email });

  if (!user || user.otp !== otp || user.otpExpiry < Date.now()) {
    return res.json({
      success: false,
      message: "Invalid OTP",
    });
  }
  res.json({
    success: true,
    message: "OTP verified",
  });
};

//send OTP

module.exports.sendOTP = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.json({
      success: false,
      message: "User not found",
    });
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  user.otp = otp;
  user.otpExpiry = Date.now() + 5 * 60 * 1000;

  await user.save();

  await transporter.sendMail({
    from: '"ZeroTrade Support" <yourgmail@gmail.com>',
    to: email,
    subject: "ZeroTrade Password Reset OTP",
    html: `
    <h2>ZeroTrade Password Reset</h2>
    <p>Your OTP is:</p>
    <h1>${otp}</h1>
    <p>This OTP will expire in 5 minutes.</p>
    <p>If you didn't request this, please ignore this email.</p>
  `,
  });

  res.json({
    success: true,
    message: "OTP sent successfully",
  });
};
