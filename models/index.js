// module.exports = { Contenido, Genero, Categoria, Actor, contenido_actores };
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../conexion/database");

// Modelo Contenido
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
    },
    titulo: {
      type: DataTypes.STRING,
    },
    resumen: {
      type: DataTypes.STRING,
    },
    temporadas: {
      type: DataTypes.INTEGER,
    },
    trailer: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: false }
);

// Modelo Genero
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
    },
  },
  { timestamps: false }
);

// Modelo Categoria
const Categoria = sequelize.define(
  "Categorias",
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

// Modelo Actor
const Actor = sequelize.define(
  "Actores",
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

// Modelo Contenido_Actores (relación entre Contenido y Actor)
const contenido_actores = sequelize.define(
  "contenido_actores",
  {
    contenido_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Contenido,
        key: "id",
      },
    },
    actor_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Actor,
        key: "id",
      },
    },
  },
  { timestamps: false }
);

// Modelo Contenido_Generos (relación entre Contenido y Genero)
const contenido_generos = sequelize.define(
  "contenido_generos",
  {
    contenido_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Contenido,
        key: "id",
      },
    },
    genero_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Genero,
        key: "id",
      },
    },
  },
  { timestamps: false }
);

// Definir las relaciones entre Contenido y Actor a través de contenido_actores
Contenido.belongsToMany(Actor, {
  through: contenido_actores,
  foreignKey: "contenido_id",
});
Actor.belongsToMany(Contenido, {
  through: contenido_actores,
  foreignKey: "actor_id",
});

// Definir las relaciones entre Contenido y Genero a través de contenido_generos
Contenido.belongsToMany(Genero, {
  through: contenido_generos,
  foreignKey: "contenido_id",
});
Genero.belongsToMany(Contenido, {
  through: contenido_generos,
  foreignKey: "genero_id",
});

module.exports = {
  Contenido,
  Genero,
  Categoria,
  Actor,
  contenido_actores,
  contenido_generos,
};
