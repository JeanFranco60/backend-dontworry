const { Product, Category } = require("../models"); // Asegúrate de importar todos los modelos necesarios

const errorFormatter = (error) => {
  // Define una función para formatear errores, si aún no la tienes.
  return error.errors ? error.errors.map((e) => e.message) : [error.message];
};

const productController = {
  index: async (req, res) => {
    try {
      const products = await Product.findAll({
        include: [
          {
            model: Category,
            attributes: ["name"],
          },
        ],
      });
      return res.json({ products });
    } catch (error) {
      return res.status(500).json({ errors: [error.message] });
    }
  },
  show: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id);
      if (!product) {
        return res.status(404).json({
          product: null,
          errors: ["Product not available"],
        });
      }
      return res.json({ product });
    } catch (error) {
      return res.status(500).json({ errors: [error.message] });
    }
  },
  store: async (req, res) => {
    try {
      const product = await Product.create(req.body);
      return res.status(201).json({ product });
    } catch (error) {
      return res.status(400).json({
        product: null,
        errors: errorFormatter(error),
      });
    }
  },
  update: async (req, res) => {
    const { id } = req.params;
    try {
      const product = await Product.findByPk(id);
      if (!product) {
        return res.status(404).json({
          product: null,
          errors: ["Product is not available"],
        });
      }

      const { name, description, pic, stock, price, featured, categoryId } =
        req.body;

      await product.update({
        name,
        description,
        pic,
        stock,
        price,
        featured,
        categoryId,
      });

      return res.json({ product });
    } catch (error) {
      return res.status(400).json({
        product: null,
        errors: errorFormatter(error),
      });
    }
  },
  destroy: async (req, res) => {
    const { id } = req.params;
    try {
      const product = await Product.findByPk(id);
      if (!product) {
        return res.status(404).json({
          product: null,
          errors: ["Product is not available"],
        });
      }

      await product.destroy();
      return res.json({ product });
    } catch (error) {
      return res.status(500).json({
        product: null,
        errors: [error.message],
      });
    }
  },
};
module.exports = productController; // Asegúrate de exportar el controlador al final
