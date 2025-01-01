const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const checkJwt = require("../middleware/checkJwt");  // Middleware de validación JWT
const isAdmin = require("../middleware/isAdmin");    // Middleware de verificación de rol de administrador

// Ruta para obtener todos los usuarios (solo administradores)
router.get("/", checkJwt, isAdmin, userController.index); 

// Ruta para obtener un usuario por ID (requiere JWT)
router.get("/:id", checkJwt, userController.show);

// Ruta para crear un nuevo usuario (sin necesidad de JWT, normalmente no restringido)
router.post("/", userController.store);

// Ruta para validar el usuario (login) - sin middleware de JWT ni isAdmin
router.post("/validate", userController.validateUser);

// Ruta para actualizar un usuario (requiere JWT y ser administrador)
router.put("/:id", checkJwt, isAdmin, userController.update);

// Ruta para eliminar un usuario (requiere JWT y ser administrador)
router.delete("/:id", checkJwt, isAdmin, userController.destroy);

module.exports = router;
