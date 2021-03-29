const express = require("express");

const {
    adicionarCarrito
  } = require("../services/LibroCarritoService");

const app = express();




// POST (crear un usuario)
app.post("/carrito", async (req, res) => {
    try {
      const body = req.body;
      //const carrito = await adicionarLibro(body);
      const codigoCliente=body.clienteId;
      const json = JSON.parse(JSON.stringify(body.libros));
      for (var i = 0; i < json.length; i++) {
        console.log(json[i].id);
        console.log(json[i].cantidad);
        let compra={
            cantidad:json[i].cantidad,
            libroId:json[i].id,
            clienteId:codigoCliente 
        }

        const carrito = await adicionarCarrito(compra);
        console.log(carrito);
        //console.log(compra);
    }
      //return res.status(201).json(libro);
      return res.status(201).json({
        message: "Registro compra, se realizo exitosamente",
      });
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        message: e.message,
      });
    }
  });


module.exports = app;