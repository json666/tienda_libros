const express = require("express");

const {
    adicionarLibro,
    obtieneLibroById,
    obtieneTodosLibros,
    modificarLibro,
    borrarLibro,
    obtieneTodos
  } = require("../services/LibroService");

const app = express();




// POST (crear un usuario)
app.post("/libros", async (req, res) => {
    try {
      const body = req.body;
      const libro = await adicionarLibro(body);
      return res.status(201).json(libro);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        message: e.message,
      });
    }
  });


  app.get("/libros/todos", async (req, res) => {
    try {
      let from = req.query.from || 0;
      from = Number(from);
      let limit = req.query.limit || 5;
      limit = Number(limit);
      const attributes = ['id', 'titulo', 'descripcion', 'precio_unitario','existencia','ISBN','num_pag'];
      return res.json(await obtieneTodosLibros(from, limit, null, attributes));
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        message: e.message,
      });
    }
  });


  app.get("/libros/todoslosLibros", async (req, res) => {
    try{
      return res.json(await obtieneTodos());
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        message: e.message,
      });
    }
  });


  app.get("/libros/libro/:libroId", async (req, res) => {
    try {
      const libroId = req.params.libroId;
      const libro = await obtieneLibroById(libroId);
      if(libro==undefined || libro==null){
        return res.status(201).json({ message: "El libro no esta disponible o está inactivo" });  
      }
      return res.json(libro);
    } catch (e) {
      console.log(e);
      return res.status(404).json({ message: e.message });
    }
  });

  
  app.delete("/libros/borrar/:libroId", async (req, res) => {
    try {
      let libroId = req.params.libroId;
      const libroBorrado = await borrarLibro(libroId);
      return res.status(204).json({
        libro: libroBorrado
      });
    } catch (e) {
      console.log(e);
      return res.status(400).json({ message: e.message });
    }
  });


  app.put("/libros/modificar/:libroId", async (req, res) => {
    try {
      const libroId = req.params.libroId;
      let body = req.body;
      const libro = await modificarLibro({ libroId, ...body });
      return res.json(libro);
    } catch (e) {
      console.log(e);
      return res.status(400).json({ message: e.message });
    }
  });


module.exports = app;