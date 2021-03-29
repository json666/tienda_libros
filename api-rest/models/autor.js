'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Autor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Libro, {
        as: 'libros',
        foreignKey: 'autorId'
      });
    }
  };
  Autor.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    edad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nacionalidad: {
      type: DataTypes.STRING,
      allowNull:false
    },
    activo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    }



  }, {
    sequelize,
    modelName: 'Autor',
  });
  return Autor;
};