const { where } = require("sequelize");
const models = require("../models/index.js");
const { Contenido } = models;

const getAllContenido = async () => {
  return await Contenido.findAll();
};

const getByIdContenido = async (id) => {
  return await Contenido.findByPk(id);
};

const deleteContenido = async (id) => {
  return await Contenido.destroy({
    where: {
      id,
    },
  });
};

const createContenido = async (
  poster,
  titulo,
  resumen,
  temporadas,
  trailer,
  categoria_id
) => {
  return await Contenido.create({
    poster,
    titulo,
    resumen,
    temporadas,
    trailer,
    categoria_id,
  });
};

const updateContenido = async (
  id,
  poster,
  titulo,
  resumen,
  temporadas,
  trailer,
  categoria_id
) => {
  return await Contenido.update(
    {
      poster,
      titulo,
      resumen,
      temporadas,
      trailer,
      categoria_id,
    },
    {
      where: {
        id,
      },
    }
  );
};

const addActorToContenido = async (contenido_id, actor_id) => {
  console.log(contenido_id, actor_id);
  const contenido = await Contenido.findByPk(contenido_id);
  console.log(contenido);
  if (!contenido) return null;
  contenido.addActor(actor_id);
  return contenido;
};

const addGeneroToContenido = async (contenido_id, genero_id) => {
  const contenido = await Contenido.findByPk(contenido_id);
  if (!contenido) return null;
  contenido.addGenero(genero_id);
  return contenido;
};

module.exports = {
  getAllContenido,
  getByIdContenido,
  deleteContenido,
  createContenido,
  updateContenido,
  addActorToContenido,
  addGeneroToContenido,
};
