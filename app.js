const express = require("express");
const app = express();
const contenidoRoutes = require("./routes/contenidoRoutes");
const sequelize = require("./conexion/database.js");

// Middlewares
app.use(express.json());

// // Requiere los modelos
// const Contenido = require("./models/contenido");
// const Categoria = require("./models/categoria");
// const Genero = require("./models/genero");
// const Actor = require("./models/actor");
// const ContenidoGenero = require("./models/contenido_genero");
// const ContenidoActor = require("./models/contenido_actor");

// // Configura las relaciones entre los modelos
// Contenido.belongsTo(Categoria, { foreignKey: "id_categoria" });
// Categoria.hasMany(Contenido, { foreignKey: "id_categoria" });

// // Relación muchos a muchos con Actor
// Contenido.belongsToMany(Actor, {
//   through: "contenido_actor",
//   foreignKey: "id_contenido",
//   otherKey: "id_actor",
//   as: "contenidoActores", // Alias único para la relación con actores
// });

// Actor.belongsToMany(Contenido, {
//   through: "contenido_actor",
//   foreignKey: "id_actor",
//   otherKey: "id_contenido",
//   as: "actorContenidos", // Alias único para la relación con actores
// });

// // Sincronización de la base de datos
// db.sequelize
//   .sync({ force: false }) // Evita borrar tablas si ya existen
//   .then(() => {
//     console.log("Base de datos sincronizada correctamente");
//   })
//   .catch((error) => {
//     console.error("Error al sincronizar la base de datos:", error);
//   });

app.use(async (req, res, next) => {
  try {
    await sequelize.authenticate();
    console.log("Conexión establecida con exito ! =)");
    next();
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error en el servidor: ", description: error.message });
  }
});

app.get("/hola", (req, res) => {
  res.send("¡Hola Mundo!");
});
// app.use("/contenido", contenidoRoutes);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
