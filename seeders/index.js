require("dotenv").config();
const productSeeder = require("./productSeeders");
const categorySeeder = require("./categorySeeders");

async function run() {
  await categorySeeder();
  await productSeeder();
  console.log("Seeders has been ran");
}
run();
