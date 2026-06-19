const mongoose = require("mongoose");

const HistoryStocksSchema = new mongoose.Schema({
  symbol: String,
  time: {
    type: Date,
    required: true,
  },
  open: Number,
  high: Number,
  low: Number,
  close: Number,
});

module.exports = { HistoryStocksSchema };
