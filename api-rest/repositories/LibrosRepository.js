const Libro = require("../models").Libro;

const obtieneLibroById = async (id) => {
  return await Libro.findOne({ where: { id: id, activo:true } });
};

const obtieneTodosLibros = async (from, limit, filters, attributes) => {
  const data = await Libro.findAndCountAll({
    limit,
    offset: from,
    where: filters,
    attributes,
  });
  return data;
};

/*const getUserById = async (id) => {
  return await User.findOne({ where: { id } });
};*/


const adicionarLibro = async ({
  titulo,
  descripcion,
  precio_unitario,
  precio_proveedor,
  existencia,
  ISBN,
  num_pag,
  autorId
}) => {
  const libro = await Libro.create({
    titulo,
    descripcion,
    precio_unitario,
    precio_proveedor,
    existencia,
    ISBN,
    num_pag,
    autorId
  });
  return libro;
};

const borrarLibro = async (id) => {
  const deleteState = {
    activo: false,
  };
  const libro = await Libro.update(deleteState, { where: { id:id } });
  return libro;
};

const modificarLibro = async ({
  libroId,
  titulo,
  descripcion,
  precio_unitario,
  precio_proveedor,
  existencia,
  ISBN,
  num_pag,
}) => {
  // const user = await User.update(
  //   { firstName, lastName, email, password, role, state, img },
  //   { where: { id: userId } }
  // );
  // return user;
  const currentLibro = await Libro.findOne({ where: { id: libroId } });
  currentLibro.titulo = titulo || currentLibro.titulo;
  currentLibro.descripcion = descripcion || currentLibro.descripcion;
  currentLibro.precio_unitario = precio_unitario || currentLibro.precio_unitario;
  currentLibro.precio_proveedor = precio_proveedor || currentLibro.precio_proveedor;
  currentLibro.existencia = existencia || currentLibro.existencia;
  currentLibro.ISBN = ISBN || currentLibro.ISBN;
  currentLibro.num_pag = num_pag || currentLibro.num_pag;
  const libro = await currentLibro.save();
  return libro;
};



module.exports = {

  obtieneLibroById,
  adicionarLibro,
  obtieneTodosLibros,
  modificarLibro,
  borrarLibro

}