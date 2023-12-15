'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bookrentals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customer: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references : {model : "customers",key:"id"}
      },
      book: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references : {model : "books",key:"id"}
      },
      start_date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      end_date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      amount: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      issubmitted: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      submit_date: {
        type: Sequelize.DATE
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('bookrentals');
  }
};