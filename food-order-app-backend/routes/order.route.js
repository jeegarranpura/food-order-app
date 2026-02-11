const express = require("express");
const { sendResponse } = require("../utils/common.utils");
const { error_msg } = require("../messages/messages");
const router = express.Router();

const orderController = require("../controllers/order.controller");

router.post("/", orderController.createOrder);
router.get("/", orderController.getAllOrders);
router.get("/:id", orderController.getOrderById);
router.put("/:id", orderController.updateStatus);

module.exports = router;
