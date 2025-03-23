'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.changeColumn('cards', 'ativo',{
      type: Sequelize.BOOLEAN,
      defaultValue: true,
     });

  },

  async down (queryInterface, Sequelize) {

     await queryInterface.dropTable('cards', 'ativo',{
      type: Sequelize.BOOLEAN,
      allowNull: true,
     });

  }
};
