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

const createContenido = async (req, res) => {
  const { poster, titulo, resumen, temporadas, trailer, categoria_id } =
    req.body;

  try {
    const contenido = await contenidoServices.createContenido(
      poster,
      titulo,
      resumen,
      temporadas,
      trailer,
      categoria_id
    );
    res.status(201).json(contenido);
  } catch (error) {
    res.status(500).json({
      error: "Error al crear el contenido",
      description: error.message,
    });
  }
};

const updateContenido = async (req, res) => {
  try {
    const { id } = req.params;
    const { poster, titulo, resumen, temporadas, trailer, categoria_id } =
      req.body;
    const contenido = await contenidoServices.updateContenido(
      id,
      poster,
      titulo,
      resumen,
      temporadas,
      trailer,
      categoria_id
    );
    if (!contenido) {
      res.status(404).json({
        message: "El contenido no fue encontrado",
      });
      return;
    }
    res.status(200).json({ message: "contenido actualizado" });
  } catch (error) {
    res.status(500).json({
      error: "Error al actualizar el contenido",
      description: error.message,
    });
  }
};

const addActorToContenido = async (req, res) => {
  try {
    const { contenido_id } = req.body;
    const { actor_id } = req.body;
    const contenido = await contenidoServices.addActorToContenido(
      contenido_id,
      actor_id
    );
    if (!contenido) {
      res.status(404).json({
        message: "El contenido no fue encontrado",
      });
      return;
    }
    res.status(200).json({ message: "actor agregado" });
  } catch (error) {
    res.status(500).json({
      error: "Error al actualizar el contenido",
      description: error.message,
    });
  }
};

const addGeneroToContenido = async (req, res) => {
  try {
    const { contenido_id } = req.body;
    const { genero_id } = req.body;
    const contenido = await contenidoServices.addGeneroToContenido(
      contenido_id,
      genero_id
    );
    if (!contenido) {
      res.status(404).json({
        message: "El contenido no fue encontrado",
      });
      return;
    }
    console.log(contenido);

    res.status(200).json({ message: "genero agregado" });
  } catch (error) {
    res.status(500).json({
      error: "Error al actualizar el contenido",
      description: error.message,
    });
  }
};

const filterContenido = async (req, res) => {
  try {
    const { titulo, genero, categoria } = req.query;
    const filtros = [titulo, genero, categoria].filter(Boolean);
    if (filtros.length !== 1) {
      return res.status(400).send({
        error:
          "Solo se puede filtrar por un parámetro a la vez: título, género o categoría.",
      });
    }
    const filtro = {};
    if (titulo) filtro.titulo = titulo;
    if (genero) filtro.genero = genero;
    if (categoria) filtro.categoria = categoria;
    const contenidos = await contenidoServices.filterContenidos(filtro);
    if (contenidos.length === 0) {
      return res.status(404).send({
        error:
          "No se encontraron contenidos que coincidan con el filtro proporcionado.",
      });
    }
    res.status(200).json(contenidos);
  } catch (error) {
    console.error(error);
    res.status(503).send({
      error: "Ocurrió un problema al intentar obtener los contenidos",
      details: error.message,
    });
  }
};

module.exports = {
  getAllContenido,
  getByIdContenido,
  deleteContenido,
  createContenido,
  updateContenido,
  addActorToContenido,
  addGeneroToContenido,
  filterContenido,
};
