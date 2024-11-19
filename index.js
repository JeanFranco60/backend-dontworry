require("dotenv").config();
const express = require("express");
const app = express();
const routes = require("./routes");

app.use(express.json());

app.use(routes);
app.listen(process.env.APP_PORT, () =>
  console.log(`Servidor corriendo en http://localhost:${process.env.APP_PORT}.\n`)
);
module.exports = app;

// const sequelize = require('./config/db');
// const User = require('./models/User'); // Importa tus modelos

// (async () => {
//   try {
//     // Sincroniza las tablas (creará las tablas si no existen)
//     await sequelize.sync({ force: true }); // `force: true` elimina y recrea tablas cada vez
//     console.log('Base de datos sincronizada.');

//     // Agregar datos de prueba (opcional)
//     await User.create({
//       name: 'Jean Franco',
//       email: 'jean.franco@example.com',
//       password: '123456',
//     });
//     console.log('Usuario creado.');
//   } catch (error) {
//     console.error('Error al sincronizar la base de datos:', error);
//   } finally {
//     await sequelize.close(); // Cierra la conexión cuando termines
//   }
// })();
