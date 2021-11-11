'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Add extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Adds.init({
    marca: DataTypes.STRING,
    modelo: DataTypes.STRING,
    versao: DataTypes.STRING,
    ano: DataTypes.INTEGER,
    quilometragem: DataTypes.INTEGER,
    observacao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Add',
    timestamps: false,
  });
  return Adds;
};