'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Adds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      marca: {
        allowNull: false,
        type: Sequelize.STRING
      },
      modelo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      versao: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ano: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      quilometragem: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      observacao: {
        allowNull: false,
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Adds');
  }
};