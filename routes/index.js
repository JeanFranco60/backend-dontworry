const express = require("express");
const router = express.Router();
const productRoutes = require("./productRoutes");


router.use("/products", productRoutes);

router.use(function (req, res) {
  res.status(404).json({ errors: ["Endpoint not found"] });
});

module.exports = router;
