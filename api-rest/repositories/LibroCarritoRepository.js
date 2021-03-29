const Carrito = require("../models").Libro_Carrito;

/*const obtieneVentaById = async (id) => {
    return await Carrito.findOne({ where: { id } });
  };*/

  
const adicionarCarrito = async ({
    cantidad,
    observaciones,
    libroId,
    clienteId
  }) => {
    const carrito = await Carrito.create({
        cantidad,
        observaciones,
        libroId,
        clienteId
    });
    return carrito;
  };



  module.exports={
      adicionarCarrito

  }