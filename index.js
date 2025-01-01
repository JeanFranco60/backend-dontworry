require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes");
const userRoutes = require("./routes/userRoutes"); // Ajusta el path según tu estructura

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes); // Prefijo para las rutas de usuarios

app.use(routes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}.`);
});

module.exports = app;
