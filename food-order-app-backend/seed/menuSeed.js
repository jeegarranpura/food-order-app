
const Menu = require("../models/menu.model");
const data = require('../data');

// mongoose.connect("mongodb://127.0.0.1:27017/restaurant");

const menuData = data;

const seed = async () => {
  await Menu.deleteMany();
  await Menu.insertMany(menuData);
  console.log("Menu seeded successfully");
  process.exit();
};


module.exports = {
    seed
}