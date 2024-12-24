const { Sequelize } = require("sequelize");
const Category = require("./Category");
const Product = require("./Product");
const Order = require("./Order");
const User = require("./User");

// Configuración de Sequelize
const sequelizeOptions = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT,
  logging: false,
  define: {
    timestamps: false,
  },
};

if (process.env.DB_DIALECT === "postgres") {
  sequelizeOptions.dialectModule = require("pg");
}

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  sequelizeOptions
);

// Verificar conexión
sequelize
  .authenticate()
  .then(() => console.log("Conexión exitosa"))
  .catch((error) => console.error("Error al conectar:", error));

// Inicializar modelos
Product.initModel(sequelize);
Category.initModel(sequelize);
Order.initModel(sequelize);
User.initModel(sequelize);

// Asociaciones (si existen)
if (Category.associate) Category.associate({ Product });
if (Product.associate) Product.associate({ Category });

module.exports = {
  sequelize,
  Product,
  Category,
  Order,
  User,
};
