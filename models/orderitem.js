'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orderitem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Orderitem.belongsTo(models.Bookorder,{
        foreignKey : "order",as : "item_order"
      })
      Orderitem.belongsTo(models.Books,{
        foreignKey : "book",as : "item_book"
      })
    }
  }
  Orderitem.init({
    order: {
      type : DataTypes.INTEGER,
      allowNull : false,
      validate : {
        notNull : {msg : "order can not be null!"},
        notEmpty : {msg : "order can not be empty!"}
      }
    },
    book: {
      type : DataTypes.INTEGER,
      allowNull : false,
      validate : {
        notNull : {msg : "book can not be null!"},
        notEmpty : {msg : "book can not be empty!"}
      }
    },
    amount: {
      type : DataTypes.INTEGER,
      allowNull : false,
      validate : {
        notNull : {msg : "amount can not be null!"},
        notEmpty : {msg : "amount can not be empty!"},
        isNumeric : {msg : "only numeric value allowed!"}
      }
    },
    quantity: {
      type : DataTypes.INTEGER,
      allowNull : false,
      validate : {
        notNull : {msg : "quantity can not be null!"},
        notEmpty : {msg : "quantity can not be empty!"},
        isNumeric : {msg : "only numeric value allowed!"}
      }
    }
  }, {
    sequelize,
    modelName: 'Orderitem',
  });
  return Orderitem;
};