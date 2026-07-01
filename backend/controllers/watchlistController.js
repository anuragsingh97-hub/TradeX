const StockModel=require("../models/StocksModel");

module.exports.getWatchlist=async (req, res) => {
  const stocks = await StockModel.find();
  res.json(stocks);
};