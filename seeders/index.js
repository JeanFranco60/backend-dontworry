require("dotenv").config();
const productSeeder = require("./productSeeders");
const categorySeeder = require("./categorySeeder");
const orderSeeder = require("./orderSeeder");
const userSeeder = require("./userSeeder");


async function run() {
  await categorySeeder();
  await productSeeder();
  await userSeeder();
  await orderSeeder();
  console.log("Seeders has been ran");
}
run();
