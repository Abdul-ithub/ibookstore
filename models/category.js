'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Category.init({
    cate_name: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {msg : "Category name can not be null!"},
        notEmpty : {msg : "Category name can not be empty!"}
      }
    },
    description: DataTypes.STRING,
    status: {
      type : DataTypes.BOOLEAN,
      allowNull : false,
      validate : {
        notNull : {msg : "Category status can not be null!"},
        notEmpty : {msg : "Category status can not be empty!"}
      }
    }
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};