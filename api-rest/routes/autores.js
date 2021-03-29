const express = require("express");

const {
    adicionarAutor,
    obtieneAutorById
  } = require("../services/AutorService");

const app = express();




// POST (crear un usuario)
app.post("/autores", async (req, res) => {
    try {
      const body = req.body;
      const autor = await adicionarAutor(body);
      return res.status(201).json(autor);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        message: e.message,
      });
    }
  });


module.exports = app;