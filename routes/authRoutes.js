const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/user/validate", authController.getToken);

module.exports = router;
