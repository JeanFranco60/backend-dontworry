require("dotenv").config();
const express = require("express");
const app = express();
const routes = require("./routes");

app.use(express.json());

app.use(routes);
app.listen(process.env.APP_PORT, () =>
  console.log(
    `Servidor corriendo en http://localhost:${process.env.APP_PORT}.\n`
  )
);
module.exports = app;
