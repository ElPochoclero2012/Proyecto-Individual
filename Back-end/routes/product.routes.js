const express = require('express');
const router = express.Router();
const uploadMulter = require('../config/multer.config');
const { getProduct,getByIdProduct,createProduct,updateProduct,deleteProduct } = require('../controllers/product.controller');
const { ValidateProducts } = require('../models/product.model');

router.get('/', getProduct);

router.get('/:id', getByIdProduct);

router.post('/', [uploadMulter.single('image'),ValidateProducts],createProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);


module.exports = router;