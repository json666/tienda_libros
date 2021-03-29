const Autor = require("../models").Autor;

const obtieneAutorById = async (id) => {
    return await Autor.findOne({ where: { id } });
  };

  
const adicionarAutor = async ({
    nombre,
    edad,
    nacionalidad,
  }) => {
    const autor = await Autor.create({
      nombre,
      edad,
      nacionalidad
    });
    return autor;
  };



  module.exports={
      obtieneAutorById,
      adicionarAutor
  }