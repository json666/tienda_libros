const bcrypt = require("bcrypt");
const ClienteRepository = require("../repositories/ClienteRepository");




const obtieneClienteById = async (id) => {
    return await ClienteRepository.obtieneClienteById(id);
};

const obtieneClienteByDoc = async (numero) => {
    return await ClienteRepository.obtieneClienteByDoc(numero);
};

const adicionarCliente = async ({
    nombre,
    apellidos,
    usuario,
    clave,
    fecha_nac,
    correo,
    num_doc,
    tipo_doc,
    telefono,
    direccion,
    tipo_clie }) => {
    return await ClienteRepository.adicionarCliente({
        nombre,
        apellidos,
        usuario,
        clave: bcrypt.hashSync(clave, 10),
        fecha_nac,
        correo,
        num_doc,
        tipo_doc,
        telefono,
        direccion,
        tipo_clie
    });
};


module.exports = {
    adicionarCliente,
    obtieneClienteByDoc,
    obtieneClienteById
};