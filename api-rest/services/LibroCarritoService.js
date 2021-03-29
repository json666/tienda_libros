const bcrypt = require("bcrypt");
const LibroCarritoRepository = require("../repositories/LibroCarritoRepository");




/*const obtieneClienteById = async (id) => {
    return await ClienteRepository.obtieneClienteById(id);
};

const obtieneClienteByDoc = async (numero) => {
    return await ClienteRepository.obtieneClienteByDoc(numero);
};*/

const adicionarCarrito = async ({
    cantidad,
    observaciones,
    libroId,
    clienteId
}) => {
    return await LibroCarritoRepository.adicionarCarrito({
        cantidad,
        observaciones,
        libroId,
        clienteId

    });
};

const borrarLibros = async (carritoId,clienteId, libroId) => {
    const libro = await LibroCarritoRepository.borrarLibros(carritoId,clienteId, libroId);
    return libro;
};


module.exports = {
    adicionarCarrito,
    borrarLibros
};