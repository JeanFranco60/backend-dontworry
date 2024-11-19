const { DataTypes, Model } = require("sequelize");

class Category extends Model {
  static initModel(sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "Category",
        tableName: "Categories",
        timestamps: false,
      }
    );
  }

  static associate(models) {
    // Definir la asociación inversa: una categoría tiene muchos productos
    this.hasMany(models.Product, { foreignKey: "categoryId" });
  }
}

module.exports = Category;
