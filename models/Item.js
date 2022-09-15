const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema(
  {
    img: { type: Array },
    title: { type: String, required: true, unique: true },
    size: { type: String },
    color: { type: String },
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: true},
  },
  { timestamps: true }
);


module.exports = mongoose.model("Item", ItemSchema);