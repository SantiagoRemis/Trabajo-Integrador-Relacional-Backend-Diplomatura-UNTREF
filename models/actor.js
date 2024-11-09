const { DataTypes } = require("sequelize");
const sequelize = require("../conexion/database");

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
  { timestamps: false }
);

// Exportar el modelo
module.exports = Actor;
