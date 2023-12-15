'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bookrental extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Bookrental.belongsTo(models.Customer,{
        foreignKey : "customer",as : "rental_customer"
      })
      Bookrental.belongsTo(models.Books,{
        foreignKey : "book",as : "rental_book"
      })
    }
  }
  Bookrental.init({
    customer: {
      type : DataTypes.INTEGER,
      allowNull : false,
      validate : {
        notNull : {msg : "customer can not be null!"},
        notEmpty : {msg : "customer can not be empty!"}
      }
    },
    book: {
      type : DataTypes.INTEGER,
      allowNull : false,
      validate : {
        notNull : {msg : "book can not be null!"},
        notEmpty : {msg : "customer can not be empty!"}
      }
    },
    start_date: {
      type : DataTypes.DATE,
      allowNull : false,
      validate : {
        notNull : {msg : "start date can not be null!"},
        notEmpty : {msg : "start date can not be empty!"}
      }
    },
    end_date: {
      type : DataTypes.DATE,
      allowNull : false,
      validate : {
        notNull : {msg : "end date can not be null!"},
        notEmpty : {msg : "end date can not be empty!"}
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
    issubmitted: {
      type : DataTypes.BOOLEAN,
      allowNull : false,
      validate : {
        notNull : {msg : "submit status can not be null!"},
        notEmpty : {msg : "submit status can not be empty!"}
      }
    },
    submit_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Bookrental',
  });
  return Bookrental;
};