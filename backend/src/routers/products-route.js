const express = require('express');
const productsRouter = express.Router();
const {updateProduct, deleteProduct, createProduct, getProductById, getProducts} = require('../controllers/products-controller');

// GET /products
productsRouter.get('/products', getProducts);

// GET /products/:id
productsRouter.get('/products/:id', getProductById);

// POST /products
productsRouter.post('/products', createProduct);

// PUT /products/:id
productsRouter.put('/products/:id', updateProduct);

// DELETE /products/:id
productsRouter.delete('/products/:id', deleteProduct)


module.exports = productsRouter;