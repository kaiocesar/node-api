var assert = require("assert");

var Product = require('./../models/product');

Object.size = function(obj) {
	var size = 0, key;
	for (key in obj) {
		if (obj.hasOwnProperty(key)) size++;
	}
	return size;
}


describe('Test model Products', function(){
	it('Add a new product', function(){
		var product = {name: "Cerveja heineken", sku:"1234D", price: 1.994};
		var Prod = new Product(product);
		assert.equal(typeof Prod, 'object');
	});

	it('Add a empty product', function(){
		var newProduct = {};
		var Prod = new Product();
		assert.equal(Object.size(Prod), 8);
	});

});

