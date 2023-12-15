'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      book_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      author_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      selling_price: {
        type: Sequelize.INTEGER
      },
      rental_price: {
        type: Sequelize.INTEGER
      },
      images: {
        allowNull: false,
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.INTEGER,
        allowNull : false,
        references : {model : "categories", key : "id"}
      },
      publisher_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      seller: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references : {model : "booksellers",key : "id"}
      },
      status: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      isoldbook: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      trans_type: {
        allowNull: false,
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
    await queryInterface.dropTable('books');
  }
};