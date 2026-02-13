const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: { type: String, default: "General" },
  ratings: { type: Number, default: 0 },
  description: String,
  image: String
});

module.exports = mongoose.model("Product", ProductSchema);