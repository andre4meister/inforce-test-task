const express = require('express');
const cors = require('cors');
const connectDB = require("./mongoose");
const {json} = require("express");
const mongoose = require("mongoose");
const productsRouter = require('./routers/products-route');
const detailsRouter = require('./routers/details-route');

const app = express();
const port = 5000;

app
    .use(cors())
    .use(json())
    .use(cors({ origin: '*' }))
    .use(express.urlencoded({ extended: true }))
    .use(productsRouter)
    .use(detailsRouter)

const start = async () => {
    try {
        await connectDB();
        app.listen(port, () => console.log('Server started on ' + port));
    } catch (error) {
        console.log(error);
    }
};

mongoose.set('strictQuery', true);
start();