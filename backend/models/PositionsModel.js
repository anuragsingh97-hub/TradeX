const mongoose = require("mongoose");
const PositionSchema = require("../schemas/PositionsSchema");

const PositionModel = mongoose.model("position", PositionSchema);

module.exports = PositionModel;
