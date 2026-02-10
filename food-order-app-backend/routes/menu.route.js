const express = require("express");
const { sendResponse } = require("../utils/common.utils");
const { error_msg } = require("../messages/messages");
const router = express.Router();

async function getAllItems(req, res, next) {
  try {
    
  } catch (error) {
    sendResponse({
        res, 
        status: 500,
        message: error_msg.internal_server_error
    });
  }
}

module.exports = router;
