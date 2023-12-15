'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bookorders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      order_date: {
        type: Sequelize.DATE
      },
      customer: {
        type: Sequelize.INTEGER,
        references : {model : "customers", key : "id"}
      },
      amount: {
        type: Sequelize.INTEGER
      },
      payment_refno: {
        type: Sequelize.STRING
      },
      delivery_address: {
        type: Sequelize.STRING
      },
      delivery_status: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('bookorders');
  }
};