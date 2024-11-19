const { Category, Product } = require("../models");

module.exports = async () => {
  // Obtener las categorías desde la base de datos
  const categories = await Category.findAll();
  const categoryMap = categories.reduce((map, category) => {
    map[category.name] = category.id; // Crear un mapa de nombre -> ID
    return map; // Agregado 'return map' para completar el 'reduce'
  }, {});

  const productList = [
    {
      id: 1,
      name: "Prueba de seeders",
      price: 79.99,
      pic: "cadena2.jpg", // Nombre de la imagen
      categoryId: categoryMap["cuero"], // Usar el ID de la categoría
      material: "cuero",
    },
    {
      id: 2,
      name: "Cadena de Plata Fina",
      price: 129.99,
      pic: "cadena2.jpg", // Nombre de la imagen
      categoryId: categoryMap["metal"],
      material: "plata",
    },
    {
      id: 3,
      name: "Colgante de Ónix Negro",
      price: 89.99,
      pic: "colgante_onix.jpg", // Nombre de la imagen
      categoryId: categoryMap["piedra"],
      material: "ónix",
    },
    {
      id: 4,
      name: "Collar de Acero Inoxidable",
      price: 69.99,
      pic: "collar_acero.jpg", // Nombre de la imagen
      categoryId: categoryMap["metal"],
      material: "acero",
    },
    {
      id: 5,
      name: "Gargantilla de Cuero",
      price: 59.99,
      pic: "gargantilla_cuero.jpg", // Nombre de la imagen
      categoryId: categoryMap["cuero"],
      material: "cuero",
    },
    {
      id: 6,
      name: "Collar con Dije de Madera",
      price: 49.99,
      pic: "collar_madera.jpg", // Nombre de la imagen
      categoryId: categoryMap["madera"],
      material: "madera",
    },
    {
      id: 7,
      name: "Cadena de Oro de 18k",
      price: 299.99,
      pic: "cadena_oro.jpg", // Nombre de la imagen
      categoryId: categoryMap["metal"],
      material: "oro",
    },
    {
      id: 8,
      name: "Collar de Perlas para Hombre",
      price: 159.99,
      pic: "collar_perlas.jpg", // Nombre de la imagen
      categoryId: categoryMap["piedra"],
      material: "perla",
    },
  ];

  await Product.bulkCreate(productList);
  console.log("Product seeder has been ran.");
};
