const Contenido = require("./contenido");
const Genero = require("./genero");
const Categoria = require("./categoria");
const Actor = require("./actor");
const ContenidoActor = require("./contenido_actor");
const ContenidoGenero = require("./contenido_genero");

const models = {
  Contenido,
  Genero,
  Categoria,
  Actor,
  ContenidoActor,
  ContenidoGenero,
};
Genero.belongsToMany(Contenido, {
  through: ContenidoGenero,
  foreignKey: "genero_id",
});
Actor.belongsToMany(Contenido, {
  through: ContenidoActor,
  foreignKey: "actor_id",
});
Contenido.belongsToMany(Actor, {
  through: ContenidoActor,
  foreignKey: "contenido_id",
});
Genero.belongsToMany(Contenido, {
  through: ContenidoGenero,
  foreignKey: "genero_id",
});
Contenido.belongsToMany(Genero, {
  through: ContenidoGenero,
  foreignKey: "contenido_id",
});

Contenido.belongsTo(Categoria, {
  foreignKey: "categoria_id",
});
Categoria.hasMany(Contenido, {
  foreignKey: "categoria_id",
  as: "contenidos",
});

module.exports = models;
