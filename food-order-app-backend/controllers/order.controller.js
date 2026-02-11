const Order = require("../models/order.model");
const Menu = require("../models/menu.model");
const { v4: uuidv4 } = require("uuid");
const { sendResponse } = require("../utils/common.utils");
const { error_msg } = require("../messages/messages");

const createOrder = async (req, res) => {
  try {
    const { customer, deliveryType, deliveryAddress, items, paymentMethod } =
      req.body;

    let orderItems = [];
    let totalAmount = 0;

    for (let item of items) {
      const menuItem = await Menu.findById(item.menuId);

      if (!menuItem || !menuItem.isAvailable) {
        return sendResponse({
          res,
          status: 400,
          message: "Item not available",
        });
      }

      const itemTotal = menuItem.price * item.quantity;
      totalAmount += itemTotal;

      orderItems.push({
        menuItem: menuItem._id,
        name: menuItem.name,
        price: menuItem.price,
        quantity: item.quantity,
        preparationTime: menuItem.preparationTime,
      });
    }

    const estimatedPrepTime = Math.max(
      ...orderItems.map((i) => i.preparationTime),
    );

    const order = await Order.create({
      orderNumber: uuidv4(),
      customer,
      deliveryType,
      deliveryAddress,
      items: orderItems,
      totalAmount,
      estimatedPreparationTime: estimatedPrepTime,
      paymentMethod,
    });
    sendResponse({
      res,
      status: 201,
      data: order,
      message: "Order placed successfully",
    });
  } catch (err) {
    sendResponse({
      res,
      status: 500,
      message: error_msg.internal_server_error,
      error_message: err.message,
    });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    sendResponse({
      res,
      status: 200,
      message: "Fetched successfully",
      data: orders,
    });
  } catch (err) {
    sendResponse({
      res,
      status: 500,
      message: error_msg.internal_server_error,
      error_message: err.message,
    });
  }
};

const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    sendResponse({
      res,
      status: 200,
      message: "Fetched successfully",
      data: order,
    });
    res.json(order);
  } catch (err) {
    sendResponse({
      res,
      status: 500,
      message: error_msg.internal_server_error,
      error_message: err.message,
    });
  }
};

const updateStatus = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true },
    );
    sendResponse({
      res,
      status: 201,
      message: "Status Updated",
      data: order,
    });
    res.json(order);
  } catch (err) {
    sendResponse({
      res,
      status: 500,
      message: error_msg.internal_server_error,
      error_message: err.message,
    });
  }
};

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  updateStatus,
};
