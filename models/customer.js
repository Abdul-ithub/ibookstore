'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Customer.belongsTo(models.User,{
        foreignKey : "user"
      })
    }
  }
  Customer.init({
    name: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {msg : "Name can not be null!"},
        notEmpty : {msg : "Name can not be empty!"},
      }
    },
    address: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {msg : "Address can not be empty!"},
      }
    },
    phone: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {msg : "Phone can not be null!"},
        notEmpty : {msg : "Phone can not be empty!"},
        len : {args : [10,10],msg : "Wrong Phone Length!"}
      }
    },
    email: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {msg : "Email can not be null!"},
        notEmpty : {msg : "Email can not be empty!"},
        isEmail : {msg : "Wrong Email format!"}
      }
    },
    user: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};