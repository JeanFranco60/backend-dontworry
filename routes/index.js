const express = require("express");
const router = express.Router();
const productRoutes = require("./productRoutes");
const categoryRoutes = require("./categoryRoutes");
const userRoutes = require("./userRoutes");
const authRoutes = require("./authRoutes");
const adminRoutes = require("./adminRoutes");
const orderRoutes = require("./orderRoutes");

const stripeRoutes = require("./stripeRoutes");
const MercadoPagoRoutes = require("./mercadoPagoRoutes");

router.use("/admins", adminRoutes);
router.use("/orders", orderRoutes);
router.use("/products", productRoutes);
router.use("/categories", categoryRoutes);
router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use("/stripe", stripeRoutes);
router.use("/mercadoPago", MercadoPagoRoutes);
router.use(function (req, res) {
  res.status(404).json({ errors: ["Endpoint not found"] });
});

module.exports = router;
