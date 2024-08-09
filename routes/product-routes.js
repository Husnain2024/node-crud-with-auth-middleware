const express = require('express');
const productRoutes = express.Router();
const productController = require('../controllers/products');
const auth = require('../middlewares/auth');



productRoutes.get('/', auth, productController.getProducts)
productRoutes.post('/', auth, productController.createProduct);
productRoutes.put('/:id', auth, productController.updateProduct);
productRoutes.delete('/:id',auth, productController.deleteProduct);



module.exports = productRoutes;


