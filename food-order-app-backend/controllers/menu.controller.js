const { error_msg } = require("../messages/messages");
const Menu = require("../models/menu.model");
const { sendResponse } = require("../utils/common.utils");

const createMenu = async (req, res) => {
  try {
    const menu = await Menu.create(req.body);
    res.status(201).json(menu);
  } catch (err) {
    sendResponse({
      res,
      status: 500,
      message: error_msg.internal_server_error,
      error_message: err.message,
    });
  }
};

const getAllMenu = async (req, res) => {
  try {
    const menu = await Menu.find({ isAvailable: true });
    res.json(menu);
  } catch (err) {
    sendResponse({
      res,
      status: 500,
      message: error_msg.internal_server_error,
      error_message: err.message,
    });
  }
};

const getMenuById = async (req, res) => {
  try {
    const menu = await Menu.findById(req.params.id);
    res.json(menu);
  } catch (err) {
    sendResponse({
      res,
      status: 500,
      message: error_msg.internal_server_error,
      error_message: err.message,
    });
  }
};

const updateMenu = async (req, res) => {
  try {
    const menu = await Menu.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(menu);
  } catch (err) {
    sendResponse({
      res,
      status: 500,
      message: error_msg.internal_server_error,
      error_message: err.message,
    });
  }
};

const deleteMenu = async (req, res) => {
  try {
    await Menu.findByIdAndDelete(req.params.id);
    res.json({ message: "Menu deleted" });
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
  createMenu,
  getAllMenu,
  getMenuById,
  updateMenu,
  deleteMenu,
};
