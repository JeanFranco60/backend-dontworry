const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

const checkjwt = require("../middleware/checkJwt");
const isAdmin = require("../middleware/isAdmin");

// Ruta pública para registrar un usuario
router.post("/", userController.store);

// Rutas protegidas que requieren autenticación
router.use(checkjwt); // Middleware de autenticación

// Rutas para un usuario autenticado (requieren verificar el ID)
router.get("/:id", userController.show);
router.patch("/:id", userController.update);
router.delete("/:id", userController.destroy);

// Rutas para un administrador (solo administradores pueden ver todos los usuarios)
router.use(isAdmin); // Middleware de autorización de admin
router.get("/", userController.index);

module.exports = router;
