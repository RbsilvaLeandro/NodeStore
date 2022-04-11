'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

const indexRoutes = require('./routes/index');
const productRoutes = require('./routes/products');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', indexRoutes);
app.use('/products', productRoutes);

module.exports = app;