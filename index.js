require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes");

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}.`);
});

module.exports = app;

// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const { sequelize } = require("./models");
// const userRoutes = require("./routes/userRoutes");

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Rutas
// // app.use("/users", userRoutes);
// const productRoutes = require("./routes/productRoutes");
// app.use("/products", productRoutes);

// // Verificar conexión a la base de datos
// sequelize
//   .authenticate()
//   .then(() => console.log("Base de datos conectada."))
//   .catch((err) => console.error("Error al conectar la base de datos:", err));

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () =>
//   console.log(`Servidor corriendo en http://localhost:${PORT}`)
// );
