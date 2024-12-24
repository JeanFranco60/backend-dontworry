require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
// const productRoutes = require("./routes/productRoutes"); // Asegúrate de que esta ruta exista y esté correctamente configurada

const app = express();

// Middleware
app.use(cors()); // Configuración de CORS básica (puedes personalizarla si es necesario)
app.use(bodyParser.json()); // Procesar solicitudes con cuerpo JSON

// Usar las rutas de productos
// app.use("/api/products", productRoutes); // Descomentar y asegurarse de que las rutas están funcionando

// Ruta base para probar que el servidor está activo
app.get("/", (req, res) => {
  res.send("Servidor corriendo correctamente");
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
