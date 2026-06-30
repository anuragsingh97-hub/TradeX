const mongoose = require("mongoose");

const HoldingsSchema = new mongoose.Schema({
  userId: String,
  symbol: String,
  quantity: Number,
  avgPrice: Number,
  currentPrice: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = HoldingsSchema;


// const HoldingsSchema = new Schema({
//   name: String,
//   qty: Number,
//   avg: Number,
//   price: Number,
//   net: String,
//   day: String,
// });