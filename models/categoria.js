const sequelize = require("../conexion/database");
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
  { timestamps: false, tableName: "categorias" }
);

module.exports = Categoria;
