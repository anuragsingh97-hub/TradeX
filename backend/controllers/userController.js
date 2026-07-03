const FundsModel = require("../models/FundsModel");
const HoldingsModel = require("../models/HoldingsModel");
const User = require("../models/UserModel");

module.exports.getProfile = async (req, res) => {
  // console.log("User ID:", req.userId);
  try {
    const user = await User.findById(req.userId).select("-password");

    res.json(user);
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports.updateProfile = async (req, res) => {
  try {
    const { username, email, mobile, dob, gender } = req.body;

    const user = await User.findByIdAndUpdate(
      req.userId,
      {
        username,
        email,
        mobile,
        dob,
        gender,
      },
      { new: true },
    ).select("-password");

    res.json({
      success: true,
      user,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports.WithdrawFunds = async (req, res) => {
  const { amount } = req.body;

  const fund = await FundsModel.findOne({
    userId: req.userId,
  });

  if (fund.availableCash < amount) {
    return res.status(400).json({
      message: "Insufficient balance",
    });
  }

  fund.availableCash -= amount;

  await fund.save();

  res.json({
    success: true,
  });
};

module.exports.AddFunds = async (req, res) => {
  // console.log("adddddddd")
  const { amount } = req.body;

  const fund = await FundsModel.findOne({
    userId: req.userId,
  });

  fund.availableCash += amount;
  fund.openingBalance += amount;

  await fund.save();

  res.json({
    success: true,
  });
};

module.exports.PortfolioSummary = async (req, res) => {
  try {
    const holdings = await HoldingsModel.find({
      userId: req.userId,
    });
    console.log(req.userId);
    let totalInvestment = 0;
    let currentValue = 0;

    holdings.forEach((holding) => {
      const investment = holding.avgPrice * holding.quantity;

      const current = holding.currentPrice * holding.quantity;

      totalInvestment += investment;
      currentValue += current;
    });

    const totalPnL = currentValue - totalInvestment;

    res.json({
      totalInvestment,
      currentValue,
      totalPnL,
      holdingsCount: holdings.length,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

module.exports.fund = async (req, res) => {
  // console.log("useridd-----", req.userId);
  try {
    const fund = await FundsModel.findOne({
      userId: req.userId,
    });

    res.json(fund);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({
      message: err.message,
    });
  }
};
