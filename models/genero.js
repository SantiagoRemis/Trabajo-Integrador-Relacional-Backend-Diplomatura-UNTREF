const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../conexion/database"); // Importa la conexión a la base de datos

const Genero = sequelize.define(
  "Genero",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
); // Si no tienes las columnas createdAt/updatedAt, pon 'timestamps: false'

// Exportar el modelo para que sea accesible en otros archivos
module.exports = Genero;
