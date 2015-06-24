var express = require('express'),
	restful = require('node-restful'),
	mongoose = restful.mongoose,
	bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/restful');


var ProductsSchema = mongoose.Schema({
	name: String,
	sku: String,
	price: Number
});

var Products = restful.model('products', ProductsSchema);
Products.methods(['get', 'put', 'post', 'delete']);

Products.register(app, '/api/products');

app.listen(3000, function(){
	console.log("Server is running at port 3000");
})