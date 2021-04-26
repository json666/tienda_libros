'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Libros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descripcion: {
        type: Sequelize.STRING(500),
        allowNull: false
      },
      precio_unitario: {
        type: Sequelize.DOUBLE,
        defaultValue: 0.0
      },
      precio_proveedor: {
        type: Sequelize.DOUBLE,
        defaultValue: 0.0
      },
      existencia: {
        type: Sequelize.DOUBLE,
        defaultValue: 0.0
      },
      ISBN: {
        type: Sequelize.STRING,
        allowNull: false
      },
      num_pag: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      thumbnailUrl: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descripcion_larga: {
        type: Sequelize.STRING(500),
        allowNull: false
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false
      },
      categoria: {
        type: Sequelize.STRING,
        allowNull: false
      },
      language: {
        type: Sequelize.STRING,
        allowNull: true
      },
      anio: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      imagen: {
        type: Sequelize.BLOB,
        allowNull: true
      },
      activo: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Libros');
  }
};