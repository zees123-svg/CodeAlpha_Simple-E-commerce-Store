const express = require("express");
const router = express.Router();
const Order = require("../models/order");

router.post("/", async (req, res) => {
  try {
    const { userId, products, total, date } = req.body;

    const order = await Order.create({
      userId,
      products,
      total,
      date
    });

    res.status(201).json(order);
  } 
  catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to place order" });
  }
});

module.exports = router;