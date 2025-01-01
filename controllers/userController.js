const { User } = require("../models");

const userController = {
  // Obtener todos los usuarios
  index: async (req, res) => {
    try {
      const users = await User.findAll(); // Obtener todos los usuarios de la base de datos
      res.status(200).json(users); // Devolver la lista de usuarios
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      res.status(500).json({ error: "Error interno del servidor." });
    }
  },

  // Obtener un solo usuario por ID
  show: async (req, res) => {
    const { id } = req.params; // Obtener el ID del usuario de los parámetros
    try {
      const user = await User.findByPk(id); // Buscar el usuario por ID
      if (!user) {
        return res.status(404).json({ error: "Usuario no encontrado." });
      }
      res.status(200).json(user); // Devolver el usuario encontrado
    } catch (error) {
      console.error("Error al obtener el usuario:", error);
      res.status(500).json({ error: "Error interno del servidor." });
    }
  },

  // Crear un nuevo usuario
  store: async (req, res) => {
    const { email, password } = req.body; // Obtener el email y la contraseña del cuerpo de la solicitud

    // Validaciones
    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Email y contraseña son requeridos." });
    }

    try {
      // Crear un nuevo usuario en la base de datos
      const newUser = await User.create({ email, password });
      res.status(201).json(newUser); // Devolver el usuario creado
    } catch (error) {
      console.error("Error al crear usuario:", error);
      res.status(400).json({ error: "Error al crear usuario." });
    }
  },

  // Validar usuario (inicio de sesión)
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

      const isValid = await User.validatePassword(password, user.password);
      if (!isValid) {
        return res.status(401).json({ error: "Contraseña incorrecta." });
      }

      res.status(200).json({ message: "Usuario validado con éxito." });
    } catch (error) {
      console.error("Error al validar usuario:", error);
      res.status(500).json({ error: "Error interno del servidor." });
    }
  },

  // Actualizar un usuario
  update: async (req, res) => {
    const { id } = req.params; // Obtener el ID del usuario de los parámetros
    const updates = req.body; // Obtener los datos de actualización del cuerpo de la solicitud

    try {
      const user = await User.findByPk(id); // Buscar el usuario por ID

      if (!user) {
        return res.status(404).json({ error: "Usuario no encontrado." });
      }

      // Actualizar el usuario
      await user.update(updates);
      res.status(200).json({ message: "Usuario actualizado con éxito.", user });
    } catch (error) {
      console.error("Error al actualizar usuario:", error);
      res.status(500).json({ error: "Error interno del servidor." });
    }
  },

  // Eliminar un usuario
  destroy: async (req, res) => {
    const { id } = req.params; // Obtener el ID del usuario de los parámetros

    try {
      const user = await User.findByPk(id); // Buscar el usuario por ID

      if (!user) {
        return res.status(404).json({ error: "Usuario no encontrado." });
      }

      // Eliminar el usuario
      await user.destroy();
      res.status(200).json({ message: "Usuario eliminado con éxito." });
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
      res.status(500).json({ error: "Error interno del servidor." });
    }
  },
};

module.exports = userController;
