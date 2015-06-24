var express = require('express'),
	restful = require('node-restful'),
	mongoose = restful.mongoose,
	bodyParser = require('body-parser'),
	app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use('/api', require('./routes/api'));

mongoose.connect('mongodb://localhost/restful');

app.listen(3000, function(){
	console.log("Server is running at port 3000");
})