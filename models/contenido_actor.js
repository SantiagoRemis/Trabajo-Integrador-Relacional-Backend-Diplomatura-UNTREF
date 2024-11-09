const { DataTypes } = require("sequelize");
const sequelize = require("../conexion/database");
const Contenido = require("./contenido");
const Actor = require("./actor");

const ContenidoActor = sequelize.define(
  "ContenidoActor",
  {
    contenido_id: {
      type: DataTypes.INTEGER,

      references: {
        model: Contenido,
        key: "cotenido_id",
      },
    },
    actor_id: {
      type: DataTypes.INTEGER,

      references: {
        model: Actor,
        key: "actor_id",
      },
    },
  },
  {
    tableName: "contenido_actores",
    timestamps: false,
  }
);

Contenido.belongsToMany(Actor, {
  through: ContenidoActor,
  foreignKey: "contenido_id",
});

Actor.belongsToMany(Contenido, {
  through: ContenidoActor,
  foreignKey: "actor_id",
});

module.exports = ContenidoActor;
