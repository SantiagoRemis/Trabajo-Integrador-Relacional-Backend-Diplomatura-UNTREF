const express = require("express");
const router = express.Router();
const contenidoController = require("../controllers/contenidoController");

// Ruta para obtener todos los contenidos
router.get("/", contenidoController.getAllContenido);
router.get("/:id", contenidoController.getByIdContenido);
router.delete("/:id", contenidoController.deleteContenido);

module.exports = router;
