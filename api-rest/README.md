Proyecto Tienda de libros
===========================================
Compilación
============
- en la línea de comandos, ir a la carpeta "tienda_libros\api-rest" y ejecutar:
$ npm install

Ejecucion:

- En linea de comandos, ir a la carpeta "tienda_libros" y ejecutar
 $ <directorio donde se encuentra el proyecto "tienda_libros">/api-rest/resources/database/drop_create.bat


Generar estructura de carpetas para sequelize
```bash
npx sequelize-cli init
```
Comando para generar la tabla Autor
```bash
npx sequelize-cli model:generate --name Autor --attributes nombre:string,edad:integer,nacionalidad:string,activo:boolean
```

Comando para generar la tabla Libro
```bash
npx sequelize-cli model:generate --name Libro --attributes titulo:string,descripcion:string(500),precio_unitario:doble,precio_proveedor:doble, existencia:doble,ISBN:string,num_pag:string,thumbnailUrl:string,descripcion_larga:string,status:string,categoria:string,language:string,anio:integer,imagen:blob,activo:boolean
```

Comando para generar la tabla Cliente
```bash
npx sequelize-cli model:generate --name Cliente --attributes nombre:string,apellidos:string,usuario:string,clave:string,fecha_nac:string,correo:string,num_doc:string,tipo_doc:string,telefono:string,direccion:string,tipo_cliente:string,activo:boolean
```


Comando para generar la tabla Libro Carrito
```bash
npx sequelize-cli model:generate --name Libro_Carrito --attributes cantidad:integer,observaciones:string,activo:boolean
```


Comando para ejecutar las migraciones
```bash
npx sequelize-cli db:migrate
```



Ejecutar el proyecto
=====================
- Una vez terminada la configuración del proyecto
- En la línea de comandos, ejecutar:
$ nodemon server.js



Servicios implementados
=====================
-Con la ayuda de la aplicación POSTMAN

-- Registrar Autores
=====================
- Solicitud
- URL:http://localhost:3000/autores
- Metodo:POST
- Ejemplo 1
{
    "nombre":"Axel Rauschmayer",
    "edad":75,
    "nacionalidad":"DANNES"
}

- Ejemplo2
{
    "nombre":"Addy Osmani",
    "edad":55,
    "nacionalidad":"HOLANDES"
}
- Ejemplo3
{
    "nombre":"Axel Rauschmayer",
    "edad":75,
    "nacionalidad":"DANNES"
}

-- Registrar Libros
=====================
- URL:http://localhost:3000/libros
- Metodo:POST
- Ejemplo1
{
    "titulo":"Speaking JavaScript",
    "descripcion":"Like it or not, JavaScript is everywhere these days-from browser to server to mobile-and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",
    "precio_unitario":290.00,
    "precio_proveedor":250.00,
    "existencia":1,
    "ISBN":"9781449365035",
    "num_pag":460,
    "autorId":1
}

- Ejemplo2
{
    "titulo":"Learning JavaScript Design Patterns",
    "descripcion":"With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
    "precio_unitario":180.00,
    "precio_proveedor":155.00,
    "existencia":2,
    "ISBN":"9781449331818",
    "num_pag":445,
    "autorId":2
}

- Ejemplo3
{
    "titulo":"Speaking JavaScript",
    "descripcion":"Like it or not, JavaScript is everywhere these days-from browser to server to mobile-and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",
    "precio_unitario":290.00,
    "precio_proveedor":250.00,
    "existencia":1,
    "ISBN":"9781449365035",
    "num_pag":460,
    "autorId":3
}

-- Registrar Cliente
=====================
- URL:http://localhost:3000/cliente
- Metodo:POST
- Ejemplo1
{
   "nombre":"alvaro",
   "apellidos":"colomo",
   "usuario":"acolomo",
   "clave":"desa1234",
   "fecha_nac":"12/04/1985",
   "correo":"acolomo@pruebas.com",
   "num_doc":"123456789",
   "tipo_doc":"CI",
   "telefono":"77777776",
   "direccion":"calle los olvidos # 1234"
}

- Ejemplo2
{
   "nombre":"jheyson",
   "apellidos":"sanchez",
   "usuario":"jsanchez",
   "clave":"desa1234",
   "fecha_nac":"12/12/1985",
   "correo":"jsanchez@pruebas.com",
   "num_doc":"123456789",
   "tipo_doc":"CI",
   "telefono":"77777777",
   "direccion":"calle los olvidos"
}

-- Registrar una Compra
=====================
- URL:http://localhost:3000/carrito
- Metodo: POST
- Ejemplo1
{
   "clienteId":1,
   "libros":[
   		{
   			"id":1,
   			"cantidad":1
   		},
   		{
   			"id":2,
   			"cantidad":1
   		}
   	]
}

-- Paginación de Libros
=====================
- URL:http://localhost:3000/libros/todos?from=4&limit=2
- Metodo: GET

-- Borrar Libro
=====================
- URL:http://localhost:3000/libros/borrar/1
- Metodo: DELETE

-- Recuperar un Libro
=====================
- URL:http://localhost:3000/libros/libro/1
- Metodo: GET

-- Borrar libros de una compra
=====================
- URL:http://localhost:3000/carrito/borrarLibros
- Metodo: DELETE
- Ejemplo1
{
   "borrarLibros":[
   		{	
   			"carritoId":1,
   			"libroId":1,
   			"clienteId":3
   		}
   	]
}