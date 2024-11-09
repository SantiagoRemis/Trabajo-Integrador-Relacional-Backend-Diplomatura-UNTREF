module.exports = (sequelize, DataTypes) => {
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
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      trailer: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "contenidos", // Nombre de la tabla
      timestamps: false, // Si no usas timestamps en la tabla
    }
  );

  // Relación con otras tablas, si es necesario
  Contenido.associate = (models) => {
    // Relación con la tabla de categorías, si existe
    Contenido.belongsTo(models.Categoria, {
      foreignKey: "categoria_id",
      as: "categoria",
    });
  };

  return Contenido;
};
