const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Ruta de login
router.post("/", authController.getToken);

module.exports = router;
