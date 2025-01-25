const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const isAdmin = require("../middleware/isAdmin");
const checkjwt = require("../middleware/checkJwt");

// Middleware global para autenticar a todos los usuarios
router.use(checkjwt);

// Rutas para usuarios autenticados
router.post("/", orderController.store);
router.get("/myOrders", orderController.showMyOrders);

// Middleware para verificar si el usuario es administrador
router.use(isAdmin);

// Rutas exclusivas para administradores
router.get("/", orderController.index);
router.get("/:id", orderController.show);
router.patch("/:id", orderController.update);
router.delete("/:id", orderController.destroy);

module.exports = router;
