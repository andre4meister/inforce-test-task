const DetailDao = require('../dao/details-dao');

const getDetailsByProductId = async (req, res) => {
    const { productId } = req.params;
    const details = await DetailDao.getDetailsByProductId(productId);
    res.json(details);
}

const getDetailById = async (req, res) => {
    const { id } = req.params;
    const detail = await DetailDao.getById(id);
    res.json(detail);
}

const createDetail = async (req, res) => {
    const detail = req.body;
    const createdDetail = await DetailDao.createDetail(detail);
    res.json(createdDetail);
}

const updateDetail = async (req, res) => {
    const { id } = req.params;
    const detail = req.body;
    const updatedDetail = await DetailDao.updateDetail(id, detail);
    res.json(updatedDetail);
}

const deleteDetail = async (req, res) => {
    const { id } = req.params;
    const deletedDetail = await DetailDao.deleteDetail(id);
    res.json(deletedDetail);
}

module.exports = {
    getDetailsByProductId, getDetailById, createDetail, updateDetail, deleteDetail
}