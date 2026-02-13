const router = require("express").Router();
const Product = require("../models/product");

router.get("/add", async (req, res) => {
  try {
    const product = await Product.create({
      name: "Sofa Set",
      price: 25000,
      category: "Furniture",
      ratings: 4,
      description: "Modern 3-seater sofa",
      image: "sofa.jpg"
    });
    res.json(product);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;