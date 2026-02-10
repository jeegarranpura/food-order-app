const mongoose = require("mongoose");
mongoose
  .connect(
    process.env.MONGO_URI ||
      "mongodb+srv://jigssoni:jigssoni123456@demo1.3mepc.mongodb.net/food-order-app?retryWrites=true&w=majority",
  )
  .then((res) => {
    console.log("DB connected successfully");
  })
  .catch((error) => {
    console.log("Errors : ", error);
  });

require("../models/menu.model");
require("../models/order.model");
