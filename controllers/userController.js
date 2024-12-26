const { User } = require("../models");
const bcrypt = require("bcryptjs");

const userController = {
  index: async (req, res) => {
    const users = await User.findAll();

    return res.json({ users });
  },
  show: async (req, res) => {
    const { id } = req.params;
    const { sub: authId, role: authRole } = req.auth;
    if (authId != id && authRole != "Admin")
      return res.status(403).json({ user: null, errors: ["not authorized"] });
    try {
      const user = await User.findByPk(id);
      if (!user)
        return res.status(404).json({ user, errors: ["User not found"] });
      return res.json({ user });
    } catch (error) {
      res.status(400).json({ user: null, errors: ["id must be valid"] });
    }
  },
  store: async (req, res) => {
    const { email, password, confirmPassword } = req.body;

    // Validaciones
    if (!email || !password || !confirmPassword)
      return res
        .status(400)
        .json({ user: null, errors: ["All fields are required"] });

    if (password !== confirmPassword)
      return res
        .status(400)
        .json({ user: null, errors: ["Passwords do not match"] });

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser)
      return res
        .status(400)
        .json({ user: null, errors: ["Email already in use"] });

    // Encriptar contraseña y crear usuario
    if (password) user.password = await bcrypt.hash(password, 10);

    try {
      const newUser = await User.create(req.body);
      return res.status(201).json({ user: newUser });
    } catch (error) {
      return res
        .status(400)
        .json({ user: null, errors: errorFormatter(error) });
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    const userInfo = req.body;
    const loggedInUserId = req.auth.sub;

    if (id != loggedInUserId && req.auth.role != "Admin") {
      return res.status(403).json({ user: null, errors: ["not authorized"] });
    }
    const user = await User.findByPk(id);
    if (!user)
      return res.status(404).json({ user: null, errors: ["User not found"] });
    try {
      if (userInfo.password)
        userInfo.password = await bcrypt.hash(userInfo.password, 10);

      await user.update(userInfo);
      return res.json({ user });
    } catch (error) {
      return res
        .status(400)
        .json({ user: null, errors: errorFormatter(error) });
    }
  },
  destroy: async (req, res) => {
    const { id } = req.params;
    const { sub: authId, role: authRole } = req.auth;
    if (authId != id && authRole != "Admin")
      return res.status(403).json({
        user: null,
        errors: ["Not authorized"],
      });
    try {
      const user = await User.findByPk(id);
      if (!user)
        return res.status(404).json({ user, errors: ["User not found"] });
      await user.destroy();
      return res.json({ user });
    } catch (err) {
      return res.status(400).json({ user: null, errors: errorFormatter(err) });
    }
  },
};

module.exports = userController;
