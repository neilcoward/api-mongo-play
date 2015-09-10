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
		Grid.mongo = mongoose.mongo;
		var conn = mongoose.connection;
		/* jshint -W064 */
		var gfs = Grid(conn.db);
		gfs.findOne({ _id: req.params.coverId }, function (err, file) {
			console.log(file);
		});
	});

	bookRouter.route('/Books/:bookId')
		.get(bookController.getBook)
		.put(bookController.put)
		.patch(bookController.patch)
		.delete(bookController.delete);

	return bookRouter;
};

module.exports = routes;
