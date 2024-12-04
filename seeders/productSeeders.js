const { Category, Product } = require("../models");

module.exports = async () => {
  // Obtener todas las categorías de la base de datos
  const categories = await Category.findAll();
  const categoryMap = categories.reduce((map, category) => {
    map[category.name.toLowerCase()] = category.id; // Normalizamos el nombre en minúsculas
    return map;
  }, {});

  // Lista de productos con descripciones y nombres únicos
  const productList = [
    {
      id: 1,
      name: "Collar 22",
      description:
        "Un collar elegante de cuero, perfecto para cualquier ocasión.",
      price: 10.0,
      pic: "cadena1.jpg",
      categoryId: categoryMap["cuero"],
      material: "cuero",
    },
    {
      id: 2,
      name: "Cadena de Plata Fina",
      description:
        "Cadena de plata fina, ideal para combinar con otros accesorios.",
      price: 129.99,
      pic: "cadena2.jpg",
      categoryId: categoryMap["metal"],
      material: "plata",
    },
    {
      id: 3,
      name: "Colgante de Ónix Negro",
      description:
        "Colgante con piedra ónix negra, muy resistente y sofisticado.",
      price: 89.99,
      pic: "cadena3.jpg",
      categoryId: categoryMap["piedra"],
      material: "ónix",
    },
    {
      id: 4,
      name: "Collar 22 - Edición Limitada", // Cambiado nombre para evitar duplicados
      description:
        "Versión exclusiva del collar de cuero, más ajustable y elegante.",
      price: 10.0,
      pic: "cadena1.jpg",
      categoryId: categoryMap["cuero"],
      material: "cuero",
    },
    {
      id: 5,
      name: "Cadena de Plata Fina - Exclusiva", // Cambiado nombre para evitar duplicados
      description: "Cadena de plata exclusiva con un diseño único.",
      price: 129.99,
      pic: "cadena2.jpg",
      categoryId: categoryMap["metal"],
      material: "plata",
    },
    {
      id: 6,
      name: "Colgante de Ónix Negro - Edición Especial", // Cambiado nombre para evitar duplicados
      description:
        "Edición especial del colgante de ónix negro, con un diseño exclusivo.",
      price: 89.99,
      pic: "cadena3.jpg",
      categoryId: categoryMap["piedra"],
      material: "ónix",
    },
  ];

  // Crear los productos en la base de datos
  await Product.bulkCreate(productList);
  console.log("Product seeder has been ran.");
};
