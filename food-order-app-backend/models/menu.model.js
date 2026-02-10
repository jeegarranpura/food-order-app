const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema(
  {
    items_name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    preparationTime: {
      type: Number,
      required: true,
      min: 1,
    },
    isAvailable: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

const Menu = mongoose.model("Menu", menuSchema);
module.exports = Menu;
