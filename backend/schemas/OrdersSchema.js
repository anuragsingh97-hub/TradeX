// OrdersSchema.js
const mongoose = require("mongoose");

const OrdersSchema = new mongoose.Schema({
  userId: String,
  symbol: String,
  quantity: Number,
  price: Number,
  mode: String, // BUY / SELL
  productType: String, // CNC / MIS
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = OrdersSchema;