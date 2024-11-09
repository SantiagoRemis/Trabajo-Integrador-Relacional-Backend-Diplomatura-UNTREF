const { DataTypes } = require("sequelize");
const sequelize = require("../conexion/database").sequelize;
const Contenido = require("./contenido");
const Actor = require("./actor");

const ContenidoActor = sequelize.define(
  "ContenidoActor",
  {
    id_contenido: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: Contenido,
        key: "id",
      },
    },
    id_actor: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: Actor,
        key: "id_actor",
      },
    },
  },
  {
    tableName: "contenido_actores",
    timestamps: false,
  }
);

module.exports = ContenidoActor;
