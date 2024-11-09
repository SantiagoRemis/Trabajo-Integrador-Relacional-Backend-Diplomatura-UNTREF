const sequelize = require("../conexion/database");
const { DataTypes } = require("sequelize");

const Contenido = sequelize.define(
  "Contenido",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    poster: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categoria_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    resumen: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    temporadas: {
      type: DataTypes.STRING(3),
      allowNull: true,
    },
    trailer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "contenidos",
    timestamps: false,
  }
);

module.exports = Contenido;
