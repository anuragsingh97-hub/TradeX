const HoldingsModel=require("../models/HoldingsModel");

module.exports.getHoldings=async (req, res) => {
  const holdings = await HoldingsModel.find({
    userId: req.userId,
  });

  res.json(holdings);
};