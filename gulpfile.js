var gulp = require('gulp');
var del = require('del');
var connect = require('gulp-connect');
var runSequence = require('run-sequence');
var Builder = require('systemjs-builder');

gulp.task('build', function(callback) {
	runSequence(
		'build-clean', 
		['build-data', 'build-html'], 
		'build-scripts',
		callback
	);
});

gulp.task('build-clean', function(callback) {
  return del(['dist/main.js'], callback);
});

gulp.task('build-data', function() {
	return gulp.src('src/**/*.json').pipe(gulp.dest('dist/data/'));
});

gulp.task('build-html', function() {
	return gulp.src('src/**/*.html').pipe(gulp.dest('dist'));
});

gulp.task('build-scripts', function() {
	var builder = new Builder();
  return builder.buildSFX('main', 'dist/main.js', {
    minify: true,
    mangle: false,
    sourceMaps: true, // true in dev env, false in pro
    config: {
      paths: {
      	'dali': './node_modules/dalijs/dist/'
      },
      baseURL: 'src',
      defaultJSExtensions: true,
      transpiler: 'babel',
      experimental: true,
      babelOptions: {
        optional: [
          "es7.decorators",
          "es7.classProperties",
          "es7.exportExtensions",
          "es7.functionBind"
        ]
      }     
    }
  });
});

gulp.task('connect', function() {	
	connect.server({
		root: 'dist',
		livereload: true
	});
});

gulp.task('reload', function() {
	connect.reload();
});

gulp.task('watch', function () {
	gulp.watch('src/**/*.html', function() {
		runSequence('build-html')
	});

  gulp.watch('src/**/*.js', function() {
  	runSequence('build-scripts');
  });
});


gulp.task('default', ['connect', 'watch']);