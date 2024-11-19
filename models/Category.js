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
        timestamps: false, // Cambia a false si no usas `createdAt` y `updatedAt`
      }
    );
  }
}

module.exports = Category;
