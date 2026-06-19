const mongoose = require("mongoose");
const { HistoryStocksSchema } = require("../schemas/HistoryStocksSchema");

const HistoryStockModel = mongoose.model("stockHistory", HistoryStocksSchema);

module.exports = HistoryStockModel;