const bcrypt = require("bcrypt");
const LibroRepository = require("../repositories/LibrosRepository");




const obtieneLibroById = async (id) => {
    return await LibroRepository.obtieneLibroById(id);
};

const adicionarLibro = async ({
    titulo,
    descripcion,
    precio_unitario,
    precio_proveedor,
    existencia,
    ISBN,
    num_pag,
    descripcion_larga,
    status,
    categoria,
    anio,
    languaje,
    thumbnailUrl,
    autorId }) => {
    return await LibroRepository.adicionarLibro({
        titulo,
        descripcion,
        precio_unitario,
        precio_proveedor,
        existencia,
        ISBN,
        num_pag,
        descripcion_larga,
        status,
        categoria,
        anio,
        languaje,
        thumbnailUrl,
        autorId
    });
};


const obtieneTodosLibros = async (from, limit, filters, attributes) => {
    let defaultFilters = {
        activo: true,
    };
    if (!filters) {
        filters = defaultFilters;
    } else {
        filters = { ...defaultFilters, ...filters };
    }
    const { count, rows } = await LibroRepository.obtieneTodosLibros(
        from,
        limit,
        filters,
        attributes
    );
    return { count, users: rows };
};


const obtieneTodos = async () => {
    const { count, rows } = await LibroRepository.obtieneTodos(
    );
    return { count, books: rows };
};

const borrarLibro = async (id) => {
    const libro = await LibroRepository.borrarLibro(id);
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
    const libro = await LibroRepository.modificarLibro({
        userId,
        libroId,
        titulo,
        descripcion,
        precio_unitario,
        precio_proveedor,
        existencia,
        ISBN,
        num_pag,
    });
    return libro;
};



module.exports = {
    obtieneLibroById,
    adicionarLibro,
    obtieneTodosLibros,
    modificarLibro,
    borrarLibro,
    obtieneTodos
};