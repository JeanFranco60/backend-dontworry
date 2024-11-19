// routes/categoryRoutes.js
const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryControllers"); // Asegúrate de importar el controlador

router.get("/", categoryController.index); // Usar el controlador
router.get("/:id", categoryController.show);

module.exports = router;
