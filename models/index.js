const sequelize = require("../conexion/database");
const Contenido = require("./contenido");
const Genero = require("./genero");
const Categoria = require("./categoria");
const Actor = require("./actor");
const ContenidoActor = require("./contenido_actor");

const models = {
  Contenido,
  Genero,
  Categoria,
  Actor,
  ContenidoActor,
};

Actor.belongsToMany(Contenido, {
  through: ContenidoActor,
  foreignKey: "actor_id",
});
Contenido.belongsToMany(Actor, {
  through: ContenidoActor,
  foreignKey: "contenido_id",
});
module.exports = models;
