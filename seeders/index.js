require("dotenv").config();
const productSeeder = require("./productSeeders");
const categorySeeder = require("./categorySeeders");
const userSeeder = require("./userSeeders");

async function run() {
  await categorySeeder();
  await productSeeder();
  await userSeeder;
  console.log("Seeders has been ran");
}
run();
