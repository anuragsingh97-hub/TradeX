
const mongoose = require("mongoose");
const { FundsSchema } = require("../schemas/FundsSchema");

module.exports = mongoose.model("fund", FundsSchema);
