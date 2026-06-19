const mongoose = require("mongoose");
const { StocksSchema } = require("../schemas/StocksSchema");

const StockModel = mongoose.model("stock", StocksSchema);

module.exports = StockModel;