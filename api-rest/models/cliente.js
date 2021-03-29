'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Libro_Carrito, {
        as: 'libro_carritos',
        foreignKey: 'clienteId'
      });
      // define association here
    }
  };
  Cliente.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    apellidos: {
      type: DataTypes.STRING,
      allowNull: false
    },
    usuario: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    clave: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha_nac: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    num_doc: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    tipo_doc: {
      type: DataTypes.ENUM,
      values: ["NIT", "CI","CE","PASAPORTE"],
      defaultValue: "CI",
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tipo_cliente: {
      type: DataTypes.STRING,
      defaultValue: "PE"
    },
    activo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    }
  }, {
    sequelize,
    modelName: 'Cliente',
  });
  return Cliente;
};