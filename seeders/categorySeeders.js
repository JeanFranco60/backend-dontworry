const { Category } = require("../models");

module.exports = async () => {
  const categories = [
    { name: "cuero" },
    { name: "metal" },
    { name: "piedra" },
    { name: "madera" },
  ];

  await Category.bulkCreate(categories);
  console.log("Category seeder has been ran.");
};
