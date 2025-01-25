const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/mercadoPagoController");

// Ruta para crear una preferencia de pago
router.post("/create-preference", paymentController.createPreference);

// Ruta para manejar notificaciones de MercadoPago (webhook)
router.post("/webhook", paymentController.handleWebhook);

module.exports = router;
