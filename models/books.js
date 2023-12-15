'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Books.belongsTo(models.Category,{
        foreignKey : 'category', as : 'book_cate'
      })
      Books.belongsTo(models.Bookseller,{
        foreignKey : 'seller', as : 'book_seller'
      })
    }
  }
  Books.init({
    book_name: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {msg : "book Name can not be null!"},
        notEmpty : {msg : "book Name can not be empty!"},
      }
    },
    author_name: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {msg : "author Name can not be null!"},
        notEmpty : {msg : "author Name can not be empty!"},
      }
    },
    selling_price: {
      type : DataTypes.INTEGER,
      validate : {
        notEmpty : {msg : "selling price can not be empty!"},
        isNumeric : {msg : "only numbers allowed!"}
      }
    },
    rental_price: {
      type : DataTypes.INTEGER,
      validate : {
        notEmpty : {msg : "rental price can not be empty!"},
        isNumeric : {msg : "only numbers allowed!"}
      }
    },
    images: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {msg : "book image can not be null!"},
        notEmpty : {msg : "book image can not be empty!"},
      }
    },
    publisher_name: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {msg : "publisher Name can not be null!"},
        notEmpty : {msg : "publisher Name can not be empty!"},
      }
    },
    status: {
      type : DataTypes.BOOLEAN,
      allowNull : false,
      validate : {
        notNull : {msg : "status can not be null!"},
        notEmpty : {msg : "status can not be empty!"},
      }
    },
    isoldbook: {
      type : DataTypes.BOOLEAN,
      allowNull : false,
      validate : {
        notNull : {msg : "oldbook status can not be null!"},
        notEmpty : {msg : "oldbook status can not be empty!"},
      }
    },
    trans_type: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {msg : "transaction type can not be null!"},
        notEmpty : {msg : "transaction type can not be empty!"},
      }
    }
  }, {
    sequelize,
    modelName: 'Books',
  });
  return Books;
};