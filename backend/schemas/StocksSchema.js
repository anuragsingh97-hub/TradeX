const mongoose = require("mongoose");

const StocksSchema = new mongoose.Schema({
  symbol: String,
  price: Number,
  change: Number,
});

module.exports = { StocksSchema };