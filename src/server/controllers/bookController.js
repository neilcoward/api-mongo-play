var mongoose = require('mongoose');
var Grid = require('gridfs-stream');
var fs = require('fs');
var path = require('path');

var bookController = function (Book) {
	var post = function (req, res) {
		var book = new Book(req.body);

		if (!req.body.title) {
			res.status(400);
			res.send('Title is required');
		}
		else {
			if (book.coverArtPath) {
				book.coverArtId = new mongoose.Types.ObjectId();
			}
			else {
				book.coverArtId = '';
			}

			book.save(function (err) {
				if (err) {
					res.status(500).send(err);
				}
				else {
					if (book.coverArtPath) {
						Grid.mongo = mongoose.mongo;
						var conn = mongoose.connection;
						/* jshint -W064 */
						var gfs = Grid(conn.db);
						var writestream = gfs.createWriteStream({
							filename: path.basename(book.coverArtPath),
							_id: book.coverArtId
						});
						fs.createReadStream(book.coverArtPath).pipe(writestream);

						writestream.on('close', function (file) {
							console.log(file.filename + ' Written To DB');
						});
					}

					res.status(201);
					res.send(book);
				}
			});
		}
	};

	var get = function (req, res) {
		var query = {};
		if (req.query.genre) {
			query.genre = req.query.genre;
		}
		Book.find(query, function (err, books) {
			if (err) {
				res.status(500).send(err);
			} else {
				var returnBooks = [];
				books.forEach(function (element, index, array) {
					var newBook = element.toJSON();
					newBook.links = {};
					newBook.links.self = 'http://' + req.headers.host + '/api/books/' + newBook._id;
					returnBooks.push(newBook);
				});
				res.json(returnBooks);
			}
		});
	};

	var getBook = function (req, res) {
		var returnBook = req.book.toJSON();
		returnBook.links = {};

		if (returnBook.coverArtId) {
			Grid.mongo = mongoose.mongo;
			var conn = mongoose.connection;
			/* jshint -W064 */
			var gfs = Grid(conn.db);
			gfs.findOne({_id: returnBook.coverArtId}, function (err, file) {
				console.log(file);
			});
		}

		var newLink = 'http://' + req.headers.host + '/api/books?genre=' + returnBook.genre;
		returnBook.links.FilterByThisGenre = newLink.replace(' ', '%20');
		res.json(returnBook);
	};

	var put = function (req, res) {
		if (!req.body.title) {
			res.status(400);
			res.send('Title is required');
		}
		else {
			req.book.title = req.body.title;
			req.book.author = req.body.author;
			req.book.genre = req.body.genre;
			req.book.read = req.body.read;
			req.book.save(function (err) {
				if (err) {
					res.status(500).send(err);
				} else {
					res.json(req.book);
				}
			});

			res.json(req.book);
		}
	};

	var patch = function (req, res) {
		for (var p in req.body) {
			if (req.body[p] !== '_id') {
				req.book[p] = req.body[p];
			}
		}
		req.book.save(function (err) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.json(req.book);
			}
		});
		res.json(req.book);
	};

	var deleteBook = function (req, res) {
		req.book.remove(function (err) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.status(204).send('book removed');
			}
		});
	};

	return {
		post: post,
		get: get,
		getBook: getBook,
		put: put,
		patch: patch,
		delete: deleteBook
	};
};

module.exports = bookController;
