// const jwt = require("jsonwebtoken");
// const { Admin, User } = require("../models");
// const bcrypt = require("bcryptjs");

// const authController = {
//   getToken: async (req, res) => {
//     try {
//       const { email, password } = req.body;
//       if (!email || !password) {
//         return res.status(400).json({
//           token: null,
//           errors: ["Both email and password are required."],
//         });
//       }

//       // Buscar admin
//       const admin = await Admin.findOne({ where: { email } });
//       let token;

//       if (admin && (await bcrypt.compare(password, admin.password))) {
//         // Crear JWT para Admin
//         token = jwt.sign(
//           { sub: admin.id, role: "Admin" },
//           process.env.TOKEN_SECRET,
//           { expiresIn: "1h" } // Añadir expiración al token
//         );
//         return res.status(200).json({ token });
//       }

//       // Buscar usuario normal
//       const user = await User.findOne({ where: { email } });
//       if (user && (await bcrypt.compare(password, user.password))) {
//         // Crear JWT para User
//         token = jwt.sign(
//           { sub: user.id, role: "User" },
//           process.env.TOKEN_SECRET,
//           { expiresIn: "1h" }
//         );
//         return res.status(200).json({ token });
//       }

//       // Si no se encuentra usuario o admin
//       return res.status(400).json({
//         token: null,
//         errors: ["Invalid credentials. Please try again."],
//       });
//     } catch (err) {
//       console.error("Error en getToken:", err.message);
//       return res.status(500).json({
//         token: null,
//         errors: ["An error occurred. Please try again later."],
//       });
//     }
//   },
// };

// module.exports = authController;
