var express = require('express');
var router = express.Router();
var Product = require('../models/product.js');

Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/products');

module.exports = router;