'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bookseller extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Bookseller.belongsTo(models.User,{
        foreignKey : 'user'
      })
    }
  }
  Bookseller.init({
    company_name: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {msg : "company name can not be null!"},
        notEmpty : {msg : "company name can not be empty"}
      }
    },
    address: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {msg : "address can not be null!"},
        notEmpty : {msg : "address can not be empty"}
      }
    },
    phone: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {msg : "phone can not be null!"},
        notEmpty : {msg : "phone can not be empty"},
        len : {args : [10,10],msg : "wrong phone length!"}
      }
    },
    email: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {msg : "email can not be null!"},
        notEmpty : {msg : "email can not be empty"},
        isEmail : {msg : "wrong email format!"}
      }
    },
    name: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {msg : "name can not be null!"},
        notEmpty : {msg : "name can not be empty"}
      }
    },
    regno: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {msg : "Reg no can not be null!"},
        notEmpty : {msg : "Reg no can not be empty"}
      }
    },
    gstno: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {msg : "GST no not be null!"},
        notEmpty : {msg : "GST no not be empty"}
      }
    },
  }, {
    sequelize,
    modelName: 'Bookseller',
  });
  return Bookseller;
};