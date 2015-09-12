var express = require('express');
var mongoose = require('mongoose');
var Grid = require('gridfs-stream');
var fs = require('fs');

var routes = function (Book) {
	var bookRouter = express.Router();
	var bookController = require('../controllers/bookController')(Book);

	bookRouter.route('/Books')
		.post(bookController.post)
		.get(bookController.get);

	bookRouter.use('/Books/:bookId', function (req, res, next) {
		Book.findById(req.params.bookId, function (err, book) {
			if (err) {
				res.status(500).send(err);
			} else if (book) {
				req.book = book;
				next();
			}
			else {
				res.status(404).send('no book found');
			}
		});
	});

	bookRouter.use('/Books/:bookId/Cover/:coverId', function (req, res, next) {
		getFile(function (error, data) {
			res.writeHead(200, { 'Content-Type': 'image/png' });
			res.end(data, 'binary');
		}, req.params.coverId);
	});

	var getFile = function (callback, id) {;
		var db = mongoose.connection.db;
		var GridStore = mongoose.mongo.GridStore;
		var gs = new GridStore(db, new mongoose.Types.ObjectId(id), 'r');
		gs.open(function (err, gs) {
			gs.read(callback);
		});
	};

	bookRouter.route('/Books/:bookId')
		.get(bookController.getBook)
		.put(bookController.put)
		.patch(bookController.patch)
		.delete(bookController.delete);

	return bookRouter;
};

module.exports = routes;
