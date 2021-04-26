'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Libro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Autor, {
        as: "autor",
        foreignKey: "autorId",
      });
      this.hasMany(models.Libro_Carrito, {
        as: 'libro_carritos',
        foreignKey: 'libroId'
      });
    }
  };
  Libro.init({
    titulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(500),
      allowNull: false,
      
    },
    precio_unitario: {
      type: DataTypes.DOUBLE,
      defaultValue: 0.0
    },
    precio_proveedor: {
      type: DataTypes.DOUBLE,
      defaultValue: 0.0
    },
    existencia: {
      type: DataTypes.DOUBLE,
      defaultValue: 0.0
    },
    ISBN: {
      type: DataTypes.STRING,
      allowNull: false
    },
    num_pag:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    activo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    thumbnailUrl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion_larga: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: false
    },
    language: {
      type: DataTypes.STRING,
      allowNull: true
    },
    anio: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    imagen: {
      type: DataTypes.BLOB,
      allowNull: true
    },


  }, {
    sequelize,
    modelName: 'Libro',
  });
  return Libro;
};