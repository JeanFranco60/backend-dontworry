const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Rutas para obtener, crear, actualizar y eliminar usuarios
router.get("/", userController.index); // Obtener todos los usuarios
router.get("/:id", userController.show); // Obtener un usuario por ID
router.post("/", userController.store); // Crear un nuevo usuario
router.post("/validate", userController.validateUser); // Validar usuario (login)
router.put("/:id", userController.update); // Actualizar un usuario
router.delete("/:id", userController.destroy); // Eliminar un usuario

module.exports = router;
