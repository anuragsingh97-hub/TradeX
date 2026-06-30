const mongoose = require("mongoose");

const PositionSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },

  symbol: {
    type: String,
    required: true,
  },

  quantity: {
    type: Number,
    required: true,
  },

  avgPrice: {
    type: Number,
    required: true,
  },

  currentPrice: {
    type: Number,
    default: 0,
  },

  pnl: {
    type: Number,
    default: 0,
  },

  productType: {
    type: String,
    enum: ["CNC", "MIS"],
    default: "CNC",
  },

  status: {
    type: String,
    enum: ["OPEN", "CLOSED"],
    default: "OPEN",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = PositionSchema;