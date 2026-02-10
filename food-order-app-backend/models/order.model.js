const mongoose = require("mongoose");
const orderItemSchema = new mongoose.Schema({
  menuItem: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Menu",
    required: true,
  },
  item_name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
});

const addressSchema = new mongoose.Schema({
  addressLine1: {
    type: String,
    required: true,
  },
  addressLine2: {
    type: String,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  pincode: {
    type: String,
    required: true,
  },
  landmark: {
    type: String,
  },
});

const orderSchema = new mongoose.Schema(
  {
    orderNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    items: [orderItemSchema],
    status: {
      type: String,
      enum: [
        "Pending",
        "Preparing",
        "Ready",
        "OutForDelivery",
        "Completed",
        "Cancelled",
      ],
      default: "pending",
    },
    customer: {
      name: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      email: String,
    },
    deliveryType: {
      type: String,
      enum: ["dinein", "takeaway", "delivery"],
      required: true,
    },
    deliveryAddress: {
      type: addressSchema,
      required: function () {
        return this.deliveryType === "delivery";
      },
    },
    estimatedPreparationTime: {
      type: Number, // minutes
    },

    totalAmount: {
      type: Number,
      required: true,
    },
    paymentMethod: {
      type: String,
      enum: ["Cash", "UPI", "Card"],
    },

    paymentStatus: {
      type: String,
      enum: ["Pending", "Paid"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  },
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
