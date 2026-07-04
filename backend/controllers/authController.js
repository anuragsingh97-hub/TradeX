const User = require("../models/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");
const FundsModel = require("../models/FundsModel");
const axios = require("axios");

// const nodemailer = require("nodemailer");
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASSWORD,
//   },
// });

// const transporter = nodemailer.createTransport({
//   host: "smtp-relay.brevo.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASSWORD,
//   },
// });

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
      secure: true,
      sameSite: "none",
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
  console.log("during login--");
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
      secure: true,
      sameSite: "none",
    });
    // console.log("during login--",token);
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
    secure: true,
    sameSite: "none",
    path: "/",
  });

  return res.status(200).json({
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

// module.exports.sendOTP = async (req, res) => {
//   const { email } = req.body;

//   const user = await User.findOne({ email });

//   if (!user) {
//     return res.json({
//       success: false,
//       message: "User not found",
//     });
//   }

//   const otp = Math.floor(100000 + Math.random() * 900000).toString();

//   user.otp = otp;
//   user.otpExpiry = Date.now() + 5 * 60 * 1000;

//   await user.save();
//   console.log(" otp saved in usermodel");
//   try {
//     await transporter.verify();
//     console.log("SMTP connection successful");
//   } catch (err) {
//     console.error("SMTP Verify Error:", err);
//   }

//   try {
//     await apiInstance.sendTransacEmail({
//       sender: {
//         name: "ZeroTrade Support",
//         email: "anuragksingh52@gmail.com",
//       },

//       to: [
//         {
//           email: email,
//         },
//       ],

//       subject: "ZeroTrade Password Reset OTP",

//       htmlContent: `
//       <h2>ZeroTrade Password Reset</h2>
//       <p>Your OTP is:</p>
//       <h1>${otp}</h1>
//       <p>This OTP expires in 5 minutes.</p>
//   `,
//     });

//     console.log("Email sent:", info);
//   } catch (err) {
//     console.error(err);
//   }
// await transporter.sendMail({
//   from: `"ZeroTrade Support" <${process.env.EMAIL_USER}>`,
//   to: email,
//   subject: "ZeroTrade Password Reset OTP",
//   html: `
//   <h2>ZeroTrade Password Reset</h2>
//   <p>Your OTP is:</p>
//   <h1>${otp}</h1>
//   <p>This OTP will expire in 5 minutes.</p>
//   <p>If you didn't request this, please ignore this email.</p>
// `,
// });

//   res.json({
//     success: true,
//     message: "OTP sent successfully",
//   });
// };

module.exports.sendOTP = async (req, res) => {
  try {
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

    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "ZeroTrade Support",
          email: "anuragksingh52@gmail.com",
        },
        to: [
          {
            email: email,
          },
        ],
        subject: "ZeroTrade Password Reset OTP",
        htmlContent: `
          <h2>ZeroTrade Password Reset</h2>
          <p>Your OTP is:</p>
          <h1>${otp}</h1>
          <p>This OTP expires in 5 minutes.</p>
        `,
      },
      {
        headers: {
          accept: "application/json",
          "api-key": process.env.BREVO_API_KEY,
          "content-type": "application/json",
        },
      },
    );

    console.log(response.data);

    res.json({
      success: true,
      message: "OTP sent successfully",
    });
  } catch (err) {
    console.log(err.response?.data || err.message);

    res.status(500).json({
      success: false,
      message: "Email sending failed",
    });
  }
};
