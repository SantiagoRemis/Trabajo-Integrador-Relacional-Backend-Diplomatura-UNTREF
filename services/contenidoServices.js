const { where } = require("sequelize");
const { Contenido } = require("../models");

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

module.exports = {
  getAllContenido,
  getByIdContenido,
  deleteContenido,
};
