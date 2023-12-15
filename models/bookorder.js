'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bookorder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Bookorder.belongsTo(models.Customer,{
        foreignKey : "customer",as : "order_customer"
      })
    }
  }
  Bookorder.init({
    order_date: {
      type : DataTypes.DATE,
      allowNull : false,
      validate : {
        notNull : {msg : "order date can not be null!"},
        notEmpty : {msg : "order date can not be empty!"}
      }
    },
    customer: {
      type : DataTypes.INTEGER,
      allowNull : false,
      validate : {
        notNull : {msg : "customer can not be null!"},
        notEmpty : {msg : "customer can not be empty!"}
      }
    },
    amount: {
      type : DataTypes.INTEGER,
      allowNull : false,
      validate : {
        notNull : {msg : "amount can not be null!"},
        notEmpty : {msg : "amount can not be empty!"}
      }
    },
    payment_refno: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {msg : "ref no. can not be null!"},
        notEmpty : {msg : "ref no. can not be empty!"}
      }
    },
    delivery_address: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {msg : "del_address can not be null!"},
        notEmpty : {msg : "del_address can not be empty!"}
      }
    },
    delivery_status: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {msg : "del_status can not be null!"},
        notEmpty : {msg : "del_status can not be empty!"}
      }
    }
  }, {
    sequelize,
    modelName: 'Bookorder',
  });
  return Bookorder;
};