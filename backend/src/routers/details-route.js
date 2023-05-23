const express = require('express');
const detailsRouter = express.Router();
const {createDetail, getDetailsByProductId, deleteDetail, getDetailById, updateDetail} = require('../controllers/details-controller');

// GET /details/:productId
detailsRouter.get('/details/:productId', getDetailsByProductId);

// GET /details/:id
detailsRouter.get('/details/:id', getDetailById);

// POST /details
detailsRouter.post('/details', createDetail);

// PUT /details/:id
detailsRouter.put('/details/:id', updateDetail);

// DELETE /details/:id
detailsRouter.delete('/details/:id', deleteDetail)

module.exports = detailsRouter;