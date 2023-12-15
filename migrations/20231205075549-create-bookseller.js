'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('booksellers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      company_name: {
        allowNull: false,
        unique : true,
        type: Sequelize.STRING
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING
      },
      phone: {
        allowNull: false,
        unique : true,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        unique : true,
        type: Sequelize.STRING
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      regno: {
        allowNull: false,
        unique : true,
        type: Sequelize.STRING
      },
      gstno: {
        allowNull: false,
        unique : true,
        type: Sequelize.STRING
      },
      user: {
        allowNull : false,
        type: Sequelize.INTEGER,
        references : {model : "users",key : "id"}
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
    await queryInterface.dropTable('booksellers');
  }
};