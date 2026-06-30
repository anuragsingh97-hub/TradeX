// const { model } = require("mongoose");

// const { HoldingsSchema } = require("../schemas/HoldingsSchema");

// const HoldingsModel = new model("holding", HoldingsSchema);

// module.exports = { HoldingsModel };

const mongoose = require("mongoose");
const HoldingSchema = require("../schemas/HoldingsSchema");

const HoldingsModel = mongoose.model("holding", HoldingSchema);

module.exports = HoldingsModel;