const Detail = require('../models/detail-model');

class DetailDao {
    constructor() {
        this.detail = Detail;
    }

    async getDetailsByProductId(productId) {
        return this.detail.find({ productId: productId});
    }

    async getById(id) {
        return this.detail.findById(id);
    }

    async createDetail(product) {
        return this.detail.create(product);
    }

    async updateDetail(id, detail) {
        return this.detail.findByIdAndUpdate(id, detail);
    }
    async deleteDetail(id) {
        return this.detail.findByIdAndDelete(id);
    }
}

module.exports = new DetailDao();