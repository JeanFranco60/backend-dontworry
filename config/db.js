// const { Sequelize } = require("sequelize");
// require("dotenv").config(); // Carga variables del archivo .env

// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     host: process.env.DB_HOST,
//     dialect: process.env.DB_DIALECT,
//     logging: false, // Evita logs de Sequelize
//   }
// );

// module.exports = sequelize;


const { Sequelize } = require('sequelize');

// Cambia los datos según tu base de datos
const sequelize = new Sequelize('dont-worry', 'root', 'root', {
  host: 'localhost', // O la dirección del servidor
  dialect: 'mysql', // Cambia a 'postgres', 'sqlite', etc. según el caso
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión exitosa a la base de datos.');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
})();

module.exports = sequelize;
