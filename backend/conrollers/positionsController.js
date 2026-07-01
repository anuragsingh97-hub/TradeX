const PositionModel=require("../models/PositionsModel");
module.exports.getPositions=async (req, res) => {
  try {
    const positions = await PositionModel.find({
      userId: req.userId,
    });
    const updatedPositions = positions.map((p) => ({
      ...p._doc,
      pnl: (p.currentPrice - p.avgPrice) * p.quantity,
    }));
    // console.log(updatedPositions)
    res.json(updatedPositions);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
