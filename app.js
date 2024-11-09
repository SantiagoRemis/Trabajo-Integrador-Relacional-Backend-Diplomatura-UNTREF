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

// Rutas
app.use("/", contenidoRoutes);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
