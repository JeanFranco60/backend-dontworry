const { Category, Product } = require("../models");

module.exports = async () => {
  // Obtener todas las categorías de la base de datos
  const categories = await Category.findAll();
  const categoryMap = categories.reduce((map, category) => {
    map[category.name.toLowerCase()] = category.id; // Normalizamos el nombre en minúsculas
    return map;
  }, {});

  // Lista de productos para poblar la base de datos
  const productList = [
    {
      id: 1,
      name: "Collar de Cuero Elegante",
      price: 79.99,
      pic: "cadena1.jpg",
      categoryId: categoryMap["cuero"], // Coincide con la categoría "cuero"
      material: "cuero", // Material en minúsculas, coincide con el frontend
    },
    {
      id: 2,
      name: "Cadena de Plata Fina",
      price: 129.99,
      pic: "cadena2.jpg",
      categoryId: categoryMap["metal"], // Coincide con la categoría "metal"
      material: "plata",
    },
    {
      id: 3,
      name: "Colgante de Ónix Negro",
      price: 89.99,
      pic: "cadena3.jpg",
      categoryId: categoryMap["piedra"], // Coincide con la categoría "piedra"
      material: "ónix",
    },
  ];

  // Crear los productos en la base de datos
  await Product.bulkCreate(productList);
  console.log("Product seeder has been ran.");
};
