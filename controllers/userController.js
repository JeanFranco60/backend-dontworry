// // const { User } = require("../models");
// // const bcrypt = require("bcryptjs");

// // const userController = {
// //   index: async (req, res) => {
// //     const users = await User.findAll();

// //     return res.json({ users });
// //   },
// //   show: async (req, res) => {
// //     const { id } = req.params;
// //     const { sub: authId, role: authRole } = req.auth;
// //     if (authId != id && authRole != "Admin")
// //       return res.status(403).json({ user: null, errors: ["not authorized"] });
// //     try {
// //       const user = await User.findByPk(id);
// //       if (!user)
// //         return res.status(404).json({ user, errors: ["User not found"] });
// //       return res.json({ user });
// //     } catch (error) {
// //       res.status(400).json({ user: null, errors: ["id must be valid"] });
// //     }
// //   },
// //   store: async (req, res) => {
// //     const { email, password, confirmPassword } = req.body;

// //     // Validaciones
// //     if (!email || !password || !confirmPassword)
// //       return res
// //         .status(400)
// //         .json({ user: null, errors: ["All fields are required"] });

// //     if (password !== confirmPassword)
// //       return res
// //         .status(400)
// //         .json({ user: null, errors: ["Passwords do not match"] });

// //     const existingUser = await User.findOne({ where: { email } });
// //     if (existingUser)
// //       return res
// //         .status(400)
// //         .json({ user: null, errors: ["Email already in use"] });

// //     // Encriptar contraseña y crear usuario
// //     if (password) user.password = await bcrypt.hash(password, 10);

// //     try {
// //       const newUser = await User.create(req.body);
// //       return res.status(201).json({ user: newUser });
// //     } catch (error) {
// //       return res
// //         .status(400)
// //         .json({ user: null, errors: errorFormatter(error) });
// //     }
// //   },

// //   update: async (req, res) => {
// //     const { id } = req.params;
// //     const userInfo = req.body;
// //     const loggedInUserId = req.auth.sub;

// //     if (id != loggedInUserId && req.auth.role != "Admin") {
// //       return res.status(403).json({ user: null, errors: ["not authorized"] });
// //     }
// //     const user = await User.findByPk(id);
// //     if (!user)
// //       return res.status(404).json({ user: null, errors: ["User not found"] });
// //     try {
// //       if (userInfo.password)
// //         userInfo.password = await bcrypt.hash(userInfo.password, 10);

// //       await user.update(userInfo);
// //       return res.json({ user });
// //     } catch (error) {
// //       return res
// //         .status(400)
// //         .json({ user: null, errors: errorFormatter(error) });
// //     }
// //   },
// //   destroy: async (req, res) => {
// //     const { id } = req.params;
// //     const { sub: authId, role: authRole } = req.auth;
// //     if (authId != id && authRole != "Admin")
// //       return res.status(403).json({
// //         user: null,
// //         errors: ["Not authorized"],
// //       });
// //     try {
// //       const user = await User.findByPk(id);
// //       if (!user)
// //         return res.status(404).json({ user, errors: ["User not found"] });
// //       await user.destroy();
// //       return res.json({ user });
// //     } catch (err) {
// //       return res.status(400).json({ user: null, errors: errorFormatter(err) });
// //     }
// //   },
// // };

// // module.exports = userController;

// const { User } = require("../models/User");

// const validateUser = async (req, res) => {
//   const { email } = req.body;

//   try {
//     // Buscar usuario en la base de datos
//     const user = await User.findOne({ where: { email } });

//     if (!user) {
//       return res.status(404).json({ error: "Usuario no encontrado" });
//     }

//     return res.status(200).json({ message: "Usuario encontrado", user });
//   } catch (error) {
//     console.error("Error al validar usuario:", error);
//     return res.status(500).json({ error: "Error interno del servidor" });
//   }
// };

// module.exports = { validateUser };

const { User } = require("../models");

const userController = {
  validateUser: async (req, res) => {

    const { email, password } = req.body;

    // Validar que se envíen ambos campos
    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Email y contraseña son requeridos." });
    }

    try {
      // Buscar usuario por email
      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(404).json({ error: "Usuario no encontrado." });
      }

      // Validar la contraseña
      const isValid = await User.validatePassword(password, user.password);
      if (!isValid) {
        return res.status(401).json({ error: "Contraseña incorrecta." });
      }

      // Respuesta exitosa
      res.status(200).json({ message: "Usuario validado con éxito." });
    } catch (error) {
      console.error("Error al validar usuario:", error);
      res.status(500).json({ error: "Error interno del servidor." });
    }
  },
};

module.exports = userController;
