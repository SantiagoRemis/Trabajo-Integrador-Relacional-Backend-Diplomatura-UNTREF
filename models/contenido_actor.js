const { DataTypes } = require("sequelize");
const sequelize = require("../conexion/database");
const Contenido = require("./contenido");
const Actor = require("./actor");

const ContenidoActor = sequelize.define(
  "ContenidoActor",
  {
    contenido_id: {
      type: DataTypes.INTEGER,
      // primaryKey: true,
      // allowNull: false,
      references: {
        model: Contenido,
        key: "cotenido_id",
      },
    },
    actor_id: {
      type: DataTypes.INTEGER,
      // primaryKey: true,
      // allowNull: false,
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

ContenidoActor.belongsToMany(Contenido, {
  through: ContenidoActor,
  foreignKey: "contenido_id",
});
ContenidoActor.belongsToMany(Actor, {
  through: ContenidoActor,
  foreignKey: "actor_id",
});

module.exports = ContenidoActor;
