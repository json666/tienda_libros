const Cliente = require("../models").Cliente;

const obtieneClienteById = async (id) => {
    return await Cliente.findOne({ where: { id } });
};

const obtieneClienteByDoc = async (num_doc) => {
    return await Cliente.findOne({ where: { num_doc:num_doc } });
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
}) => {
    const cliente = await Cliente.create({
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
    });
    return cliente;
};



module.exports = {

    adicionarCliente,
    obtieneClienteById,
    obtieneClienteByDoc

}