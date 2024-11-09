const express = require("express");
const router = express.Router();
const contenidoController = require("../controllers/contenidoController");

// Ruta para obtener todos los contenidos
router.get("/contenido", contenidoController.getAllContenido);
router.get("/contenido/:id", contenidoController.getByIdContenido);
router.post("/contenido/", contenidoController.createContenido);
router.delete("/contenido/:id", contenidoController.deleteContenido);
router.put("/contenido/:id", contenidoController.updateContenido);

router.post("/actor", contenidoController.addActorToContenido);
module.exports = router;
