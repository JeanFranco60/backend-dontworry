const { Product } = require("../models");

module.exports = async () => {
  // Obtener las categorías desde la base de datos
  const categories = await Category.findAll();
  const categoryMap = categories.reduce((map, category) => {
    map[category.name] = category.id; // Crear un mapa de nombre -> ID
    return map;
  }, {});

  const productList = [
    {
      id: 1,
      name: "Collar de Cuero Trenzado",
      price: 79.99,
      categoryId: categoryMap["cuero"], // Usar el ID de la categoría
      material: "cuero",
    },
    {
      id: 2,
      name: "Cadena de Plata Fina",
      price: 129.99,
      categoryId: categoryMap["metal"],
      material: "plata",
    },
    {
      id: 3,
      name: "Colgante de Ónix Negro",
      price: 89.99,
      categoryId: categoryMap["piedra"],
      material: "ónix",
    },
    {
      id: 4,
      name: "Collar de Acero Inoxidable",
      price: 69.99,
      categoryId: categoryMap["metal"],
      material: "acero",
    },
    {
      id: 5,
      name: "Gargantilla de Cuero",
      price: 59.99,
      categoryId: categoryMap["cuero"],
      material: "cuero",
    },
    {
      id: 6,
      name: "Collar con Dije de Madera",
      price: 49.99,
      categoryId: categoryMap["madera"],
      material: "madera",
    },
    {
      id: 7,
      name: "Cadena de Oro de 18k",
      price: 299.99,
      categoryId: categoryMap["metal"],
      material: "oro",
    },
    {
      id: 8,
      name: "Collar de Perlas para Hombre",
      price: 159.99,
      categoryId: categoryMap["piedra"],
      material: "perla",
    },
  ];

  await Product.bulkCreate(productList);
  console.log("Product seeder has been ran.");
};
