const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  console.log("Order received:", req.body);

  res.status(201).json({
    success: true,
    message: "Order placed successfully"
  });
});

module.exports = router;