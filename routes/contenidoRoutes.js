const express = require("express");
const router = express.Router();
const contenidoController = require("../controllers/contenidoController");

// Ruta para obtener todos los contenidos
router.get("/contenido/filter", contenidoController.filterContenido);
router.get("/contenido", contenidoController.getAllContenido);
router.get("/contenido/:id", contenidoController.getByIdContenido);

router.post("/contenido/", contenidoController.createContenido);

router.delete("/contenido/:id", contenidoController.deleteContenido);

router.put("/contenido/:id", contenidoController.updateContenido);

router.post("/actor", contenidoController.addActorToContenido);
router.post("/genero", contenidoController.addGeneroToContenido);
module.exports = router;
