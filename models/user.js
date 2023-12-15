'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    email: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {msg : "Email can not be null!"},
        notEmpty : {msg : "Email can not be empty!"},
        isEmail : {msg : "Wrong Email format!"}
      }
    },
    password: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {msg : "Password can not be null!"},
        notEmpty : {msg : "Password can not be empty!"},
      }
    },
    type: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {msg : "Type can not be null!"},
        notEmpty : {msg : "Type can not be empty!"},
      }
    },
    active_status: {
      type : DataTypes.BOOLEAN,
      allowNull : false,
      validate : {
        notNull : {msg : "Status can not be null!"},
        notEmpty : {msg : "Status can not be empty!"},
      }
    },
    otp: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};