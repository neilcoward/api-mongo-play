var express = require('express');

var routes = function(Book) {
	var bookRouter = express.Router();
	var bookController = require('../controllers/bookController')(Book);

	bookRouter.route('/Books')
	.post(bookController.post)
	.get(bookController.get);

	bookRouter.use('/Books/:bookId', function(req, res, next) {
		Book.findById(req.params.bookId, function(err, book) {
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

	bookRouter.route('/Books/:bookId')
		.get(bookController.getBook)
		.put(bookController.put)
		.patch(bookController.patch)
		.delete(bookController.delete);

	return bookRouter;
};

module.exports = routes;
