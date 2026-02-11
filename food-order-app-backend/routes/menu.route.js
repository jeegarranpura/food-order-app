const express = require("express");
const { sendResponse } = require("../utils/common.utils");
const { error_msg } = require("../messages/messages");
const router = express.Router();

const menuController = require("../controllers/menu.controller");

router.post("/", menuController.createMenu);
router.get("/", menuController.getAllMenu);
router.get("/:id", menuController.getMenuById);
router.put("/:id", menuController.updateMenu);
router.delete("/:id", menuController.deleteMenu);

module.exports = router;
