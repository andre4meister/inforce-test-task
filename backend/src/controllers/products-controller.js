const ProductDao = require('../dao/products-dao');

const getProducts = async (req, res) => {
    const { sortBy, sortOrder } = req.query;
    const products = await ProductDao.getProducts(sortBy, sortOrder);
    res.json(products);
}

const getProductById = async (req, res) => {
    const { id } = req.params;
    const product = await ProductDao.getProductById(id);
    res.json(product);
}

const createProduct = async (req, res) => {
    const product = req.body;
    const createdProduct = await ProductDao.createProduct(product);
    res.json(createdProduct);
}

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const product = req.body;
    const updatedProduct = await ProductDao.updateProduct(id, product);
    res.json(updatedProduct);
}

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await ProductDao.deleteProduct(id);
    res.json(deletedProduct);
}

module.exports = {
    getProducts, getProductById, createProduct, updateProduct, deleteProduct
}