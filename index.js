require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes");

// Configuración de CORS
const corsOptions = {
  origin: "https://dontuworry.netlify.app/", // Cambia esta URL por la de tu frontend si está en otro dominio
  methods: "GET,POST,PUT,DELETE", // Métodos permitidos
  allowedHeaders: "Content-Type,Authorization", // Encabezados permitidos
};

// Usar CORS con las opciones configuradas
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}.`);
});

module.exports = app;
