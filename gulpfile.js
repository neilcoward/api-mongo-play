var gulp = require('gulp');
var args = require('yargs').argv;
var nodemon = require('gulp-nodemon');
var config = require('./gulp.config')();
var $ = require('gulp-load-plugins')({lazy:true});
var supertest = require('supertest');

gulp.task('vet', function() {
	log('Analysing source with JSHint and JSCS');

	return gulp
	.src(config.alljs)
	.pipe($.if(args.verbose, $.print()))
	.pipe($.jscs())
	.pipe($.jshint())
	.pipe($.jshint.reporter('jshint-stylish', {verbose: true}))
	.pipe($.jshint.reporter('fail'));
});

gulp.task('build', function() {
	nodemon(config.nodeConfig)
	.on('restart', function() {
		console.log('Restarting');
	});
});

gulp.task('test', function() {
	$.env({vars: {ENV: 'Test'}});
	gulp.src('tests/*.js', {read: false})
	.pipe($.mocha({reporter: 'nyan'}));
});

//////////////////

function log(msg) {
	if (typeof(msg) === 'object') {
		for (var item in msg) {
			if (msg.hasOwnProperty(item)) {
				$.util.log($.util.colors.blue(msg[item]));
			}
		}
	}
	else
	{
		$.util.log($.util.colors.blue(msg));
	}
}
