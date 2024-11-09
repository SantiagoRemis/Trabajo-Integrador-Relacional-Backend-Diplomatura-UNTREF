const { Contenido, Genero, Categoria, Actor } = require("../models");
const contenidoServices = require("../services/contenidoServices");

// Obtener todos los contenidos
const getAllContenido = async (req, res) => {
  try {
    const contenidos = await contenidoServices.getAllContenido();
    res.json(contenidos);
  } catch (error) {
    res.status(500).json({
      error: "Error al obtener los contenidos",
      description: error.message,
    });
  }
};

const getByIdContenido = async (req, res) => {
  try {
    const { id } = req.params;

    const contenido = await contenidoServices.getByIdContenido(id);
    if (!contenido) {
      res.status(404).json({
        message: "El contenido no fue encontrado",
      });
    }
    res.json(contenido);
    return;
  } catch (error) {
    res.status(500).json({
      error: "Error al obtener los contenidos",
      description: error.message,
    });
  }
};

const deleteContenido = async (req, res) => {
  try {
    const { id } = req.params;

    const contenido = await contenidoServices.deleteContenido(id);
    if (!contenido) {
      res.status(404).json({
        message: "El contenido no fue encontrado",
      });
      return;
    }
    res.status(200).json({
      message: "El contenido fue eliminado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      error: "Error al obtener los contenidos",
      description: error.message,
    });
  }
};

module.exports = {
  getAllContenido,
  getByIdContenido,
  deleteContenido,
};
