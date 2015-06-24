var restful = require('node-restful');
var mongoose = require('mongoose');
var productSchema = new mongoose.Schema({
	name: String,
	sku: String,
	price: Number
});

module.exports = restful.model('Products', productSchema);