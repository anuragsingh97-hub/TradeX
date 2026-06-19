const { Schema } = require("mongoose");

const OrdersSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
  },
  qty: Number,
  price: Number,
  mode: String,
});

module.exports = { OrdersSchema };