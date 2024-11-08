-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS trailerflixnueva;
USE trailerflixnueva;

-- Crear la tabla categorias
CREATE TABLE categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

-- Crear la tabla contenidos
CREATE TABLE contenidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    poster VARCHAR(255),
    titulo VARCHAR(100) NOT NULL,
    categoria_id INT,
    resumen TEXT,
    temporadas INT,
    trailer VARCHAR(255),
    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);

-- Crear la tabla actores
CREATE TABLE actores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

-- Crear la tabla de relación contenido_actores
CREATE TABLE contenido_actores (
    contenido_id INT,
    actor_id INT,
    PRIMARY KEY (contenido_id, actor_id),
    FOREIGN KEY (contenido_id) REFERENCES contenidos(id) ON DELETE CASCADE,
    FOREIGN KEY (actor_id) REFERENCES actores(id) ON DELETE CASCADE
);

-- Crear la tabla generos
CREATE TABLE generos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

-- Crear la tabla de relación contenido_generos
CREATE TABLE contenido_generos (
    contenido_id INT,
    genero_id INT,
    PRIMARY KEY (contenido_id, genero_id),
    FOREIGN KEY (contenido_id) REFERENCES contenidos(id) ON DELETE CASCADE,
    FOREIGN KEY (genero_id) REFERENCES generos(id) ON DELETE CASCADE
);

