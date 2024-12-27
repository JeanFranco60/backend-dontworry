require("dotenv").config();
const productSeeder = require("./productSeeders");
const categorySeeder = require("./categorySeeders");
const userSeeder = require("./userSeeders");
const adminSeeder = require("./adminSeeders");

async function run() {
  try {
    // Ejecutar los seeders en paralelo si no importa el orden
    await Promise.all([
      userSeeder(),
      categorySeeder(),
      productSeeder(),
      adminSeeder(),
    ]);

    console.log("Seeders have been run successfully.");
  } catch (error) {
    console.error("Error running seeders:", error);
  }
}

run();
