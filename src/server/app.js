var express = require('express'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	cors = require('cors');

var db;
if (process.env.ENV === 'Test') {
	db = mongoose.connect('mongodb://localhost/bookAPI_test');
}
else {
	db = mongoose.connect('mongodb://localhost/bookAPI');
}

var Book = require('./models/bookModel');

var app = express();
app.use(cors());
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var bookRouter = require('./routes/bookRoutes')(Book);

app.use('/api', bookRouter);

app.get('/', function (req, res) {
	res.send('Welcome to my API');
});

app.listen(port, function () {
	console.log('Gulp is running my app on port: ' + port);
});

module.exports = app;
