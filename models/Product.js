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

        pic: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notNull: {
              msg: "pic cannot be null",
            },
            notEmpty: { msg: "pic cannot be empty" },
          },
        },
        description: {
          type: DataTypes.TEXT,
          allowNull: true,
          validate: {
            notEmpty: { msg: "description cannot be empty" },
          },
        },

        stock: {
          type: DataTypes.INTEGER,
          allowNull: true,
          validate: {
            notEmpty: { msg: "description cannot be empty" },
          },
        },
        price: {
          type: DataTypes.JSON,
          allowNull: false,
          validate: {
            notNull: {
              msg: "price cannot be null",
            },
          },
        },

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
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Category, { foreignKey: "categoryId" });
  }
}

module.exports = Product;
