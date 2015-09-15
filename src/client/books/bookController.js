(function () {
	'use strict';

	angular
		.module('app.book')
		.controller('Books', Books);

	function Books() {
		var vm = this;

		vm.books = [
				{
					"_id": "55dcd483adf5c4612bb64bca",
					"title": "War and Peaces",
					"genre": "Historical Fiction",
					"author": "Lev Nikolayevich Tolstoy",
					"read": true,
					"links": {
						"self": "http://localhost:3000/api/books/55dcd483adf5c4612bb64bca"
					}
				},
				{
					"_id": "55ddc2ccf1bd986c3781a452",
					"title": "The Use Of Weopons",
					"genre": "Sci-Fi",
					"author": "Iain M Banks",
					"read": false,
					"links": {
						"self": "http://localhost:3000/api/books/55ddc2ccf1bd986c3781a452"
					}
				},
				{
					"_id": "55e07129b08bad99215f2bd7",
					"title": "The Crow Road",
					"genre": "Fiction",
					"author": "Iain Banks",
					"read": false,
					"links": {
						"self": "http://localhost:3000/api/books/55e07129b08bad99215f2bd7"
					}
				},
				{
					"_id": "55e0721e6a2f4ecb22ad5581",
					"title": "The Blade Itself",
					"genre": "Fantasy",
					"author": "Joe Abercrombie",
					"read": false,
					"links": {
						"self": "http://localhost:3000/api/books/55e0721e6a2f4ecb22ad5581"
					}
				},
				{
					"_id": "55e072306a2f4ecb22ad5582",
					"title": "Half A King",
					"genre": "Fantasy",
					"author": "Joe Abercrombie",
					"read": false,
					"links": {
						"self": "http://localhost:3000/api/books/55e072306a2f4ecb22ad5582"
					}
				},
				{
					"_id": "55e07c93ede453c62d0d05e3",
					"title": "Half A World",
					"genre": "Fantasy",
					"author": "Joe Abercrombie",
					"read": false,
					"links": {
						"self": "http://localhost:3000/api/books/55e07c93ede453c62d0d05e3"
					}
				},
				{
					"_id": "55e081b548c367c63294b703",
					"title": "Best Served Cold",
					"genre": "Fantasy",
					"author": "Joe Abercrombie",
					"read": false,
					"links": {
						"self": "http://localhost:3000/api/books/55e081b548c367c63294b703"
					}
				},
				{
					"_id": "55e5fc2c6d4fa86e0cbc3015",
					"title": "Before They Are Hanged (First Law)",
					"genre": "Fantasy",
					"author": "Joe Abercrombie",
					"read": false,
					"links": {
						"self": "http://localhost:3000/api/books/55e5fc2c6d4fa86e0cbc3015"
					}
				},
				{
					"_id": "55e5fc636d4fa86e0cbc3016",
					"title": "Last Argument Of Kings: The First Law: Book Three",
					"genre": "Fantasy",
					"author": "Joe Abercrombie",
					"read": false,
					"links": {
						"self": "http://localhost:3000/api/books/55e5fc636d4fa86e0cbc3016"
					}
				},
				{
					"_id": "55e5fc966d4fa86e0cbc3017",
					"title": "The Blade Itself: Book One Of The First Law",
					"genre": "Fantasy",
					"author": "Joe Abercrombie",
					"read": false,
					"links": {
						"self": "http://localhost:3000/api/books/55e5fc966d4fa86e0cbc3017"
					}
				},
				{
					"_id": "55e601a00815bdb411900993",
					"title": "Consider Phlebas",
					"genre": "Sci-Fi",
					"author": "Iain M Banks",
					"read": false,
					"links": {
						"self": "http://localhost:3000/api/books/55e601a00815bdb411900993"
					}
				},
				{
					"_id": "55e60938f123bb981bb20882",
					"title": "The Player Of Games",
					"genre": "Sci-Fi",
					"author": "Iain M Banks",
					"read": false,
					"links": {
						"self": "http://localhost:3000/api/books/55e60938f123bb981bb20882"
					}
				},
				{
					"_id": "55e777a2054af8384bc5fa59",
					"coverArtId": "55e777a2054af8384bc5fa5a",
					"title": "Great North Road",
					"genre": "Sci-Fi",
					"author": "Peter F. Hamilton",
					"read": false,
					"links": {
						"self": "http://localhost:3000/api/books/55e777a2054af8384bc5fa59",
						"cover": "http://localhost:3000/api/books/55e777a2054af8384bc5fa59/Cover/55e777a2054af8384bc5fa5a"
					}
				},
				{
					"_id": "55e77918e0bc28284cc0bace",
					"coverArtId": "55e77918e0bc28284cc0bacf",
					"title": "Pandora's Star (Commonwealth Saga Book 1)",
					"genre": "Sci-Fi",
					"author": "Peter F. Hamilton",
					"read": false,
					"links": {
						"self": "http://localhost:3000/api/books/55e77918e0bc28284cc0bace",
						"cover": "http://localhost:3000/api/books/55e77918e0bc28284cc0bace/Cover/55e77918e0bc28284cc0bacf"
					}
				},
				{
					"_id": "55e77b16fcfa2aa54ed03900",
					"coverArtId": "55e77b16fcfa2aa54ed03901",
					"title": "The Reality Dysfunction (Nights Dawn Book 1)",
					"genre": "Sci-Fi",
					"author": "Peter F. Hamilton",
					"read": false,
					"links": {
						"self": "http://localhost:3000/api/books/55e77b16fcfa2aa54ed03900",
						"cover": "http://localhost:3000/api/books/55e77b16fcfa2aa54ed03900/Cover/55e77b16fcfa2aa54ed03901"
					}
				}
			];
        vm.title = 'Books';
		////////////////

	}
})();