// models/actor.js
const { DataTypes } = require("sequelize");
const sequelize = require("../conexion/database"); // Tu archivo de conexión

// Definir el modelo Actor
const Actor = sequelize.define(
  "Actor",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: false } // Si no usas createdAt/updatedAt
);

// Exportar el modelo
module.exports = Actor;
