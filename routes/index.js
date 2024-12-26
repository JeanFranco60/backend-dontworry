const express = require("express");
const router = express.Router();
const productRoutes = require("./productRoutes");
const categoryRoutes = require("./categoryRoutes");
const userRoutes = require("./userRoutes");

router.use("/products", productRoutes);
router.use("/categories", categoryRoutes);
router.use("/users", userRoutes);

router.use(function (req, res) {
  res.status(404).json({ errors: ["Endpoint not found"] });
});

module.exports = router;
