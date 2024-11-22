const { Sequelize } = require("sequelize");
const Category = require("./Category");
const Product = require("./Product");

// Asegúrate de que la conexión esté bien configurada
const sequelizeOptions = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT, // Corregí esta línea para que coincida con la variable DB_DIALECT
  logging: false,
  define: {
    timestamps: false, // No agregar automáticamente createdAt, updatedAt
  },
};

// Si la conexión es PostgreSQL, especifica el módulo de `pg`
if (process.env.DB_DIALECT === "postgres") {
  sequelizeOptions.dialectModule = require("pg");
}

// Conexión con la base de datos
const sequelize = new Sequelize(
  process.env.DB_NAME, // Nombre de la base de datos
  process.env.DB_USER, // Usuario de la base de datos
  process.env.DB_PASSWORD, // Contraseña de la base de datos
  sequelizeOptions // Usar las opciones definidas arriba
);

// Verificar la conexión
sequelize
  .authenticate()
  .then(() => {
    console.log("Conexión exitosa a la base de datos de Supabase");
  })
  .catch((error) => {
    console.error("No se pudo conectar a la base de datos:", error);
  });

// Inicialización de los modelos
Product.initModel(sequelize);
Category.initModel(sequelize);

// Definir las asociaciones entre los modelos
Category.associate({ Product });
Product.associate({ Category });

module.exports = {
  sequelize,
  Product,
  Category,
};
