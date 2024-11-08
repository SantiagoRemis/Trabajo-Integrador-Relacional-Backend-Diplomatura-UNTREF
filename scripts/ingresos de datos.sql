USE trailerflixnueva;

-- Insertar contenidos
INSERT INTO contenidos (poster, titulo, categoria_id, resumen, temporadas, trailer)
VALUES 
('./posters/1.jpg', 'The Crown', 1, 'Este drama narra las rivalidades políticas y el romance de la reina Isabel II, así como los sucesos que moldearon la segunda mitad del siglo XX.', 4, 'https://www.youtube.com/embed/JWtnJjn6ng0'),
('./posters/2.jpg', 'Riverdale', 1, 'El paso a la edad adulta incluye sexo, romance, escuela y familia. Para Archie y sus amigos, también hay misterios oscuros.', 5, 'https://www.youtube.com/embed/HxtLlByaYTc');

-- Relacionar los contenidos con los actores en la tabla contenido_actores
-- Para "The Crown"
INSERT INTO contenido_actores (contenido_id, actor_id)
VALUES 
(3, 1),  -- Claire Foy
(3, 2),  -- Olivia Colman
(3, 3),  -- Matt Smith
(3, 4),  -- Tobias Menzies
(3, 5),  -- Vanessa Kirby
(3, 6);  -- Helena Bonham Carter

-- Para "Riverdale"
INSERT INTO contenido_actores (contenido_id, actor_id)
VALUES 
(4, 7),  -- Lili Reinhart
(4, 8),  -- Casey Cott
(4, 9),  -- Camila Mendes
(4, 10), -- Marisol Nichols
(4, 11), -- Madelaine Petsch
(4, 12); -- Mädchen Amick

-- Relacionar los contenidos con los géneros en la tabla contenido_generos
-- Para "The Crown" - Drama (id 1) y Suceso Real (id 2)
INSERT INTO contenido_generos (contenido_id, genero_id) VALUES (1, 1), (1, 2);

-- Para "Riverdale" - Drama (id 1), Misterio (id 3), y Ficción (id 4)
INSERT INTO contenido_generos (contenido_id, genero_id) VALUES (2, 1), (2, 3), (2, 4);
