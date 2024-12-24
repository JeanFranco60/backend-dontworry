const { Model, DataTypes } = require("sequelize");

class Category extends Model {
  static initModel(sequelize) {
    Category.init(
      {
        name: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: "Category",
        tableName: "categories",
      }
    );
  }

  static associate(models) {
    // Relación inversa, que se asocia a múltiples productos
    this.hasMany(models.Product, { foreignKey: "categoryId" });
  }
}

module.exports = Category;
