const express = require("express");

const app = express();

app.use(require("./autores"));
app.use(require('./libros'));
app.use(require('./cliente'));
app.use(require('./carrito'));
/*app.use(require('./login'));*/

module.exports = app;
