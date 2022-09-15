const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    itemId: { type: String, required: true },
    title: { type: String, required: true },
    amount: { type: Number, required: true },
    priceItem: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
