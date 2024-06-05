# Desafío - Like Me

Prueba de Desafío LATAM, que solicita lo sgte.:

-Validar consultas con texto parametrizado JSON como argumento de una consulta
-Insertar registros
-Consultandr registros
-Actualizar registros

## Descripción del proyecto

Se crea un servidor que disponibilice las rutas para guardar y consultar los posts en
una base de datos PostgreSQL con el paquete pg, además de una ruta que utilice un
parámetro “id” para sumar likes al post clickeado desde la aplicación cliente

Se crea una base de datos llamada likeme y una tabla posts:

CREATE DATABASE likeme;
CREATE TABLE posts (id SERIAL, usuario VARCHAR(25), url VARCHAR(1000),
descripcion VARCHAR(255), likes INT);

-Se devuelve el archivo HTML disponibilizado a través de la ruta raíz del servidor

## Requerimientos

1. Disponibilizar una ruta POST /post que utilice una función asíncrona para emitir una
consulta SQL parametrizada y almacenar un nuevo post en la tabla posts.

2. Disponibilizar una ruta PUT /post que utilice una función asíncrona para emitir una
consulta SQL y sume un like a un post identificado por su id. Este dato
es enviado como query strings.

3. Disponibilizar una ruta GET /posts que utilice una función asíncrona para emitir una
consulta SQL y devuelva todos los posts de la tabla posts.

Realizado por: Norma Isabel Rojas 🌞