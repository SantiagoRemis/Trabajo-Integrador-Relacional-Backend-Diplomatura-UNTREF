// const { DataTypes } = require("sequelize");
// const sequelize = require("../conexion/database").sequelize;
// const Contenido = require("./contenido");
// const Genero = require("./genero");

// const ContenidoGenero = sequelize.define(
//   "ContenidoGenero",
//   {
//     id_contenido: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       allowNull: false,
//       references: {
//         model: Contenido,
//         key: "id",
//       },
//     },
//     id_genero: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       allowNull: false,
//       references: {
//         model: Genero,
//         key: "id_genero",
//       },
//     },
//   },
//   {
//     tableName: "contenido_genero",
//     timestamps: false,
//   }
// );

// module.exports = ContenidoGenero;
