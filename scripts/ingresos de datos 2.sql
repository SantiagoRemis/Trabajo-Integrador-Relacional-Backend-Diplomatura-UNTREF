USE trailerflixnueva;

-- Insertar géneros si no están ya en la tabla generos
INSERT IGNORE INTO generos (nombre) VALUES 
('Drama'), 
('Suceso Real'), 
('Misterio'), 
('Ficción');

-- Insertar contenidos
INSERT INTO contenidos (poster, titulo, categoria_id, resumen, temporadas, trailer)
VALUES 
('./posters/1.jpg', 'The Crown', 1, 'Este drama narra las rivalidades políticas y el romance de la reina Isabel II, así como los sucesos que moldearon la segunda mitad del siglo XX.', 4, 'https://www.youtube.com/embed/JWtnJjn6ng0'),
('./posters/2.jpg', 'Riverdale', 1, 'El paso a la edad adulta incluye sexo, romance, escuela y familia. Para Archie y sus amigos, también hay misterios oscuros.', 5, 'https://www.youtube.com/embed/HxtLlByaYTc');

-- Insertar actores si no están ya en la tabla actores
INSERT IGNORE INTO actores (nombre) VALUES 
('Claire Foy'), 
('Olivia Colman'), 
('Matt Smith'), 
('Tobias Menzies'), 
('Vanessa Kirby'), 
('Helena Bonham Carter'), 
('Lili Reinhart'), 
('Casey Cott'), 
('Camila Mendes'), 
('Marisol Nichols'), 
('Madelaine Petsch'), 
('Mädchen Amick');

-- Relacionar los contenidos con los actores en la tabla contenido_actores
-- Para "The Crown"
INSERT INTO contenido_actores (contenido_id, actor_id)
SELECT 1 AS contenido_id, id FROM actores WHERE nombre IN ('Claire Foy', 'Olivia Colman', 'Matt Smith', 'Tobias Menzies', 'Vanessa Kirby', 'Helena Bonham Carter');

-- Para "Riverdale"
INSERT INTO contenido_actores (contenido_id, actor_id)
SELECT 2 AS contenido_id, id FROM actores WHERE nombre IN ('Lili Reinhart', 'Casey Cott', 'Camila Mendes', 'Marisol Nichols', 'Madelaine Petsch', 'Mädchen Amick');

-- Relacionar los contenidos con los géneros en la tabla contenido_generos
-- Para "The Crown"
INSERT INTO contenido_generos (contenido_id, genero_id)
SELECT 1 AS contenido_id, id FROM generos WHERE nombre IN ('Drama', 'Suceso Real');

-- Para "Riverdale"
INSERT INTO contenido_generos (contenido_id, genero_id)
SELECT 2 AS contenido_id, id FROM generos WHERE nombre IN ('Drama', 'Misterio', 'Ficción');
