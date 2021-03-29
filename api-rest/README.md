Base de Datos implementada: POSTGRESSQL

### Crear la base de Datos, ejecutar el siguiente comando

drop_create.bat
```

Generar estructura de carpetas para sequelize
```bash
npx sequelize-cli init
```
Comando para generar la tabla User
```bash
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string,password:string,role:string,state:boolean,img:string
```

Comando para ejecutar las migraciones
```bash
npx sequelize-cli db:migrate
```
deshacer el cambio previo en la base de datos
```bash
npx sequelize-cli db:migrate:undo
```
Deshacer todos los cambios
```bash
npx sequelize-cli db:migrate:undo:all
```

Agregar columna userId a la tabla de Post
```bash
npx sequelize-cli migration:generate --name add-userid-to-post-associations
```