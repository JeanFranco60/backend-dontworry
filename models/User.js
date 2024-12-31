// const { Model, DataTypes } = require("sequelize");

// class User extends Model {
//   static initModel(sequelize) {
//     User.init(
//       {
//         id: {
//           type: DataTypes.BIGINT,
//           primaryKey: true,
//           autoIncrement: true,
//         },
//         name: {
//           type: DataTypes.STRING,
//           allowNull: false,
//           validate: {
//             notNull: {
//               msg: "name cannot be null",
//             },
//             notEmpty: { msg: "name cannot be empty" },
//           },
//         },
//         surname: {
//           type: DataTypes.STRING,
//           allowNull: false,
//           validate: {
//             notNull: {
//               msg: "surname cannot be null",
//             },
//             notEmpty: { msg: "surname cannot be empty" },
//           },
//         },
//         email: {
//           type: DataTypes.STRING,
//           allowNull: false,
//           unique: {
//             msg: "Email already in use",
//           },
//           validate: {
//             notNull: {
//               msg: "email cannot be null",
//             },
//             isEmail: { msg: "email must be valid" },
//           },
//         },

//         address: {
//           type: DataTypes.STRING,
//           allowNull: false,
//           validate: {
//             notNull: {
//               msg: "address cannot be null",
//             },
//             notEmpty: { msg: "address cannot be empty" },
//           },
//         },
//         phone: {
//           type: DataTypes.STRING,
//           allowNull: false,
//           validate: {
//             notNull: {
//               msg: "phone cannot be null",
//             },
//             notEmpty: { msg: "phone cannot be empty" },
//           },
//         },
//         password: {
//           type: DataTypes.STRING,
//           allowNull: false,
//           validate: {
//             notNull: {
//               msg: "password cannot be null",
//             },
//             notEmpty: { msg: "password cannot be empty" },
//           },
//         },
//       },
//       {
//         sequelize,
//         modelName: "user",
//       }
//     );
//     return User;
//   }
// }
// module.exports = User;


const { DataTypes, Model } = require("sequelize");
const bcrypt = require("bcrypt");

class User extends Model {
  static initModel(sequelize) {
    User.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            isEmail: true,
          },
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "User",
        tableName: "users",
      }
    );

    // Hook para encriptar la contraseña antes de guardar
    User.beforeCreate(async (user) => {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
    });
  }

  // Método para comparar contraseñas
  static async validatePassword(inputPassword, storedPassword) {
    return bcrypt.compare(inputPassword, storedPassword);
  }
}

module.exports = User;
