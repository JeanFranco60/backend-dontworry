const { DataTypes, Model } = require("sequelize");

class Product extends Model {
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
        price: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        categoryId: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "Categories",
            key: "id",
          },
        },
      },
      {
        sequelize,
        modelName: "Product",
        tableName: "Products",
        timestamps: true,
      }
    );
  }
}

module.exports = Product;
