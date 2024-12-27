require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(routes);

app.use("/products", productRoutes);
app.use("/tokens", authRoutes); // "/tokens" es el prefijo para las rutas de authRoutes

// rama nueva

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}.`);
});

module.exports = app;
