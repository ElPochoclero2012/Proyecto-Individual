const express = require("express"); 
const category = express.Router();
const { getCategory,createCategory,getByIdCategory,updateCategory,deleteCategory } = require("../controllers/category.controller");
const { ValidateCategory } = require('../models/category.model')

category.get('/', getCategory);

category.post('/', ValidateCategory, createCategory);

category.get('/:id', getByIdCategory);

category.put('/:id', updateCategory);

category.delete('/:id', deleteCategory);


module.exports=category;