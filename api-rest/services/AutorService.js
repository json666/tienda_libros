const bcrypt = require("bcrypt");
const AutorRepository = require("../repositories/AutorRepository");




const obtieneAutorById = async (id) => {
    return await AutorRepository.obtieneAutorById(id);
  };

  const adicionarAutor = async ({
    nombre,
    edad,
    nacionalidad,
  }) => {
    return await AutorRepository.adicionarAutor({
        nombre,
        edad,
        nacionalidad,
    });
  };


  module.exports = {
    obtieneAutorById,
    adicionarAutor
  };