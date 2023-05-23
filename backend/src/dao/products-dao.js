const Product = require('../models/product-model');

class ProductsDao {
    constructor() {
        this.product = Product;
    }

    async getProducts(sortBy, sortOrder) {
        return this.product.find();
    }

    async getProductById(id) {
        return this.product.findById(id);
    }

    async createProduct(product) {
        return this.product.create(product);
    }

    async updateProduct(id, product) {
        return this.product.findByIdAndUpdate(id, product);
    }
    async deleteProduct(id) {
        return this.product.findByIdAndDelete(id);
    }
}

module.exports = new ProductsDao();