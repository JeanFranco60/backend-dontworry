require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes");
const PORT = process.env.APP_PORT || 3000;
app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(PORT, () =>
  console.log(`Servidor corriendo en http://localhost:${PORT}.\n`)
);

module.exports = app;
