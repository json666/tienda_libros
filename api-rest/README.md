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
npx sequelize-cli model:generate --name Libro --attributes titulo:string,descripcion:string(500),precio_unitario:doble,precio_proveedor:doble, existencia:doble,ISBN:string,num_pag:string,activo:boolean
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

