'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Libro_Carrito extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Libro, {
        as: "libro",
        foreignKey: "libroId",
      });
      this.belongsTo(models.Cliente, {
        as: "cliente",
        foreignKey: "clienteId",
      });
    }
  };
  Libro_Carrito.init({
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    observaciones: {
      type: DataTypes.STRING,
      allowNull: true
    },
    activo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    }
  }, {
    sequelize,
    modelName: 'Libro_Carrito',
  });
  return Libro_Carrito;
};