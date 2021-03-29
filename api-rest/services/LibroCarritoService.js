const bcrypt = require("bcrypt");
const LibroCarrito = require("../repositories/LibroCarritoRepository");




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
    return await LibroCarrito.adicionarCarrito({
        cantidad,
        observaciones,
        libroId,
        clienteId

    });
};


module.exports = {
    adicionarCarrito
};