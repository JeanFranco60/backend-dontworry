const { Sequelize } = require("sequelize");

const Category = require("./Category");
const Product = require("./Product");

const sequelize = new Sequelize(
  process.env.DB_NAME, // Nombre de la base de datos
  process.env.DB_USER, // Usuario de la base de datos
  process.env.DB_PASSWORD, // Contraseña de la base de datos
  {
    host: process.env.DB_HOST, // Dirección del host
    dialect: process.env.DB_DIALECT, // Dialecto que estás usando (mysql, postgres, etc.)
    logging: false,
    define: {
      timestamps: false, // Si no deseas que Sequelize añada campos como createdAt, updatedAt
    },
  }
);

// Inicialización de los modelos
Product.initModel(sequelize);
Category.initModel(sequelize);

// Definir las asociaciones
Category.associate({ Product });
Product.associate({ Category });

module.exports = {
  sequelize,
  Product,
  Category,
};
