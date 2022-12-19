var Sequelize = require('sequelize');
var sequelize = require('../config/database');
const Joi = require('joi');
const validateRequest = require('../middleware/validateRequest');


var Category = sequelize.define('category', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING,
    status: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    }
});

const ValidateCategory = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(5).max(50).required()
        .messages({
          'string.empty': "Add a name for the category",
          'string.min': "The name for the category must be larger than 5 characters",
          'any.required': "Add a name for the category"
        })
    });
    validateRequest(req, res, next, schema);
  };

module.exports = {
    Category,
    ValidateCategory
}