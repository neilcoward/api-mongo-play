var should = require('should'),
request = require('supertest'),
app = require('../src/server/app.js'),
mongoose = require('mongoose'),
mongooseFS = require('mongoose-fs'),
Book = mongoose.model('Book'),
agent = request.agent(app);

describe('Book CRUD Test', function() {
	it('should allow a book to be posted and return a read and _id', function(done) {
		var bookPost = {title: '1984', author: 'George Orwell', genre: 'Sci-Fi'};

		agent.post('/api/Books')
		.send(bookPost)
		.expect(200)
		.end(function(err, results) {
			results.body.read.should.equal(false);
			results.body.should.have.property('_id');
			done();
		});
	});

	afterEach(function(done) {
		Book.remove().exec();
		done();
	})
});