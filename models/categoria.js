const sequelize = require("../conexion/database"); // Asegúrate de usar tu archivo de conexión
const DataTypes = require("sequelize");

const Categoria = sequelize.define(
  "Categoria",
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
); // Si no usas createdAt/updatedAt

module.exports = Categoria;
