const mongoose = require("mongoose");

const FundsSchema = new mongoose.Schema({
  userId: String,

  availableCash: {
    type: Number,
    default: 100000,
  },

  usedMargin: {
    type: Number,
    default: 0,
  },

  openingBalance: {
    type: Number,
    default: 100000,
  },
});

module.exports = { FundsSchema };