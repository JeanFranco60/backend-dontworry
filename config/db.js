sequelize
  .sync({ force: false }) // `force: false` evita eliminar las tablas existentes
  .then(() => {
    console.log("Database synchronized successfully.");
  })
  .catch((error) => {
    console.error("Error syncing database:", error);
  });
