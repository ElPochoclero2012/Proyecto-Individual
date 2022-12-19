var Sequelize = require('sequelize');
var sequelize = require('../config/database');
const Joi = require('joi');
const validateRequest = require('../middleware/validateRequest');

var Users = sequelize.define('user',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true 
    },
    username: Sequelize.STRING,
    email: {
        type: Sequelize.STRING,
        unique: true,
        validate: {
            isEmail: {
                msg: "Must be a valid email adress",
            }
        }
    },
    password: Sequelize.STRING
});

const ValidateUsers = (req, res, next) => {
    const schema = Joi.object({
        username: Joi.string().min(5).max(50).required()
            .messages({
                'string.empty': "Enter an username",
                'string.min': "The username must be at least 5 characters long",
                'any.required': "Enter an username"
            }),
        email: Joi.string().email().required()
            .messages({
                'string.empty': "Enter an email",
                'any.required': "Enter an email"
            }),
        password: Joi.string().min(5).max(50).required()
            .messages({
                'password.empty': "Enter your password",
                'password.min': "The password must be at least 5 characters long",
                'any.required': "Enter your password"
            })  
    });
    validateRequest(req, res, next, schema);
};

module.exports = {
    Users,
    ValidateUsers
};