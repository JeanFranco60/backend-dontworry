require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const productRoutes = require("./routes/products"); // Ruta de productos

// Middleware
app.use(cors());

// Usar las rutas de productos
// app.use("/api/products", productRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
