var Sequelize = require('sequelize');
var sequelize = require('../config/database');
const Joi = require('joi');
const validateRequest = require('../middleware/validateRequest');

var Products = sequelize.define('product',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true 
    },
    name: Sequelize.STRING,
    image: Sequelize.TEXT,
    price: Sequelize.INTEGER,
    category: {
        type: Sequelize.INTEGER,
        references: {
            model: 'categories',
            key: 'id'
        }
    }
},
    {
        classMethods: {
            associate: models =>{
                Products.belongsTo(models.category, {
                    foreignKey: {
                        fieldName: 'category',
                        require: true
                    },
                    targetKey: 'id'
                });
            }
        }
    }
);

const ValidateProducts = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(5).max(50).required()
        .messages({
            'string.empty': "Enter a name for the product",
            'string.min': "Product's name must be at least 5 digit long",
            'any.required': "Enter a name for the product"
        }),
        price: Joi.number().integer().required()
        .messages({
            'string.empty': "Enter a name for the product",
            'string.min': "Product's name must be at least 5 digit long",
            'any.required': "Enter a name for the product"
        }),
        category: Joi.number().integer().required()
        .messages({
            'number.empty': "Add the category of the product",
            'number.integer': "Add the category of the product",
            'any.required': "Add the category of the product"
        })
    });
    validateRequest(req, res, next, schema);
};

module.exports = {
    Products,
    ValidateProducts
}
