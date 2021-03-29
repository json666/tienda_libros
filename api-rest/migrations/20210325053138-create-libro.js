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
      num_pag:{
        type:Sequelize.INTEGER,
        allowNull:false
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