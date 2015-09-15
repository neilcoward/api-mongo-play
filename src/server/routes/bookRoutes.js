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
		getCoverImage(function (err, data) {
			if (data) {
				res.writeHead(200, { 'Content-Type': 'image/png' });
				res.end(data, 'binary');
			}
		}, req.params.coverId, res);
	});

	var getCoverImage = function (callback, id, res) {
		var db = mongoose.connection.db;
		var GridStore = mongoose.mongo.GridStore;

		if (!id.match(/^[0-9a-fA-F]{24}$/)) {
			console.log('not a valid ObjectId!');
			res.status(404).send('no cover found');
			return;
		} else {
			var gs = new GridStore(db, new mongoose.Types.ObjectId(id), 'r');
			gs.open(function (err, gs) {
				if (err) {
					console.log('Ahh! An Error!');
					res.status(404).send('no cover found');
					return;
				}
				gs.read(callback);
			});
		}
	};

	bookRouter.route('/Books/:bookId')
		.get(bookController.getBook)
		.put(bookController.put)
		.patch(bookController.patch)
		.delete(bookController.delete);

	return bookRouter;
};

module.exports = routes;
