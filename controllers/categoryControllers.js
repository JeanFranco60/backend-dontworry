// controllers/categoryController.js
const { Category } = require("../models");

const categoryController = {
  index: async (req, res) => {
    try {
      const categories = await Category.findAll();
      return res.json({ categories });
    } catch (error) {
      return res.status(500).json({ errors: [error.message] });
    }
  },
  show: async (req, res) => {
    try {
      const { id } = req.params;
      const category = await Category.findByPk(id);
      if (!category) {
        return res.status(404).json({
          category: null,
          errors: ["Category not found"],
        });
      }
      return res.json({ category });
    } catch (error) {
      return res.status(500).json({ errors: [error.message] });
    }
  },
};

module.exports = categoryController;
