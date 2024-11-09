const { DataTypes } = require("sequelize");
const sequelize = require("../conexion/database");
const Contenido = require("./contenido");
const Genero = require("./genero");

const ContenidoGenero = sequelize.define(
  "ContenidoGenero",
  {
    contenido_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Contenido,
        key: "contenido_id",
      },
    },
    genero_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Genero,
        key: "genero_id",
      },
    },
  },
  {
    tableName: "contenido_generos",
    timestamps: false,
  }
);

module.exports = ContenidoGenero;
