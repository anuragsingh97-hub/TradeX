const HoldingsModel=require("../models/HoldingsModel");

module.exports.getHoldings=async (req, res) => {
  const holdings = await HoldingsModel.find({
    userId: req.userId,
  });
console.log("holding routes hiit user id:",req.userId)
  res.json(holdings);
};