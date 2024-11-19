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
        // Otros atributos
        categoryId: {
          type: DataTypes.INTEGER,
          references: {
            model: "Categories", // Tabla relacionada
            key: "id", // Campo clave de la tabla relacionada
          },
        },
      },
      {
        sequelize,
        modelName: "Product",
        tableName: "Products", // O el nombre que tengas
        timestamps: false,
      }
    );
  }

  static associate(models) {
    // Definir la asociación entre productos y categorías
    this.belongsTo(models.Category, { foreignKey: "categoryId" });
  }
}

module.exports = Product;
