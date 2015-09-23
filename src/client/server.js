var express = require('express'),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	path = require('path');

var appExpress = express();
appExpress.use(cors());
var port = process.env.PORT || 3001;

console.log(__dirname);
var bowerPath = __dirname + '/../../bower_components';
console.log(bowerPath);
appExpress.use('/bower_components',  express.static(bowerPath));
var appPath = __dirname + '/app';
console.log(appPath);
appExpress.use('/app', express.static(appPath));

appExpress.get('/home', function (req, res) {
	res.sendFile(__dirname + '/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

appExpress.listen(port, function () {
	console.log('App is running my app on port: ' + port);
});

module.exports = appExpress;
