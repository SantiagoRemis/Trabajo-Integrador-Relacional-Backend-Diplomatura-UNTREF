// const express = require("express");
// const app = express();
// const contenidoRoutes = require("./routes/contenidoRoutes");
// const sequelize = require("./conexion/database.js");

// // Middlewares
// app.use(express.json());

// // Conexión a la base de datos
// app.use(async (req, res, next) => {
//   try {
//     await sequelize.authenticate();
//     console.log("Conexión establecida con éxito! =)");
//     next();
//   } catch (error) {
//     res
//       .status(500)
//       .json({ error: "Error en el servidor: ", description: error.message });
//   }
// });

// // Ruta de prueba
// app.get("/hola", (req, res) => {
//   res.send("¡Hola Mundo!");
// });

// // Ruta para contenidos
// app.use("/api/contenidos", contenidoRoutes); // Aquí se registran las rutas

// // Iniciar servidor
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// const express = require("express");
// const app = express();
// const contenidoRoutes = require("./routes/contenidoRoutes");
// const sequelize = require("./conexion/database"); // Conexión a la base de datos

// // Middlewares
// app.use(express.json());

// app.use(async (req, res, next) => {
//   try {
//     await sequelize.authenticate();
//     console.log("Conexión establecida con éxito!");
//     next();
//   } catch (error) {
//     res
//       .status(500)
//       .json({ error: "Error en el servidor", description: error.message });
//   }
// });

// // Ruta de contenidos y géneros
// app.use("/api", contenidoRoutes); // Usa "/api" para que las rutas sean /api/contenido y /api/generos

// // Server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
const express = require("express");
const app = express();
const contenidoRoutes = require("./routes/contenidoRoutes");
const sequelize = require("./conexion/database"); // Conexión a la base de datos

// Middlewares
app.use(express.json());

app.use(async (req, res, next) => {
  try {
    await sequelize.authenticate();
    console.log("Conexión establecida con éxito!");
    next();
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error en el servidor", description: error.message });
  }
});

// Ruta de contenidos, géneros y categorías
app.use("/contenido", contenidoRoutes); // Usa "/api" para que las rutas sean /api/contenido, /api/generos y /api/categorias

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
