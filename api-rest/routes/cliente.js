const express = require("express");

const parseJson = require('parse-json');

const {
    adicionarCliente,
    obtieneClienteByDoc,
    obtieneClienteById
} = require("../services/ClienteService");

const app = express();




// POST (crear un usuario)
app.post("/cliente", async (req, res) => {
    try {
        const body = req.body;
        const cliente = await adicionarCliente(body);
        return res.status(201).json(cliente);
    } catch (e) {
        console.log(e);
        return res.status(400).json({
            message: e.message,
        });
    }
});

/*
Para el  carrito

console.log(body.nombre);
        const json = JSON.parse(JSON.stringify(body.libros));
        //        for (const key in parserJson.libros) {
        for (var i = 0; i < json.length; i++) {
            console.log(json[i].id);
            console.log(json[i].cantidad);
        }
*/


module.exports = app;