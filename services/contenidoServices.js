const { where } = require("sequelize");
// const { Contenido } = require("../models");
const Contenido = require("../models/contenido");

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

module.exports = {
  getAllContenido,
  getByIdContenido,
  deleteContenido,
  createContenido,
};
