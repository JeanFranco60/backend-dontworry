// const express = require("express");
// const router = express.Router();
// const authController = require("../controllers/authController");

// // Ruta de login
// router.post("/", authController.getToken);

// module.exports = router;


const express = require("express");
const bcrypt = require("bcrypt"); // Por seguridad, para manejar contraseñas
const jwt = require("jsonwebtoken"); // Para generar tokens JWT
const { User } = require("../models"); // Tu modelo Sequelize
const router = express.Router();

// Configuración de clave secreta
const TOKEN_SECRET = process.env.TOKEN_SECRET || "secret_key";

// Endpoint de login
router.post("/tokens", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Verificar si el usuario existe
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    // Verificar la contraseña
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ error: "Contraseña incorrecta" });
    }

    // Generar un token JWT
    const token = jwt.sign({ id: user.id, role: user.role }, TOKEN_SECRET, {
      expiresIn: "1h", // Token válido por 1 hora
    });

    return res.json({ token, role: user.role });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error del servidor" });
  }
});

module.exports = router;
