var gulp = require('gulp');
var del = require('del');
var Builder = require('systemjs-builder');
var builder = new Builder();
var connect = require('gulp-connect');

gulp.task('clean', function(cb) {
  return del(['dist/main.js'], cb);
});

gulp.task('copy-json', function() {
	return gulp.src('src/**/*.json')
    .pipe(gulp.dest('dist/data/'));
});

gulp.task('copy-html', function() {
   return gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('copy-dali', function() {
	return gulp.src('node_modules/dalijs/dist/dali.js')
		.pipe(gulp.dest('src/dali/'));
});

gulp.task('build', function () {
	builder.buildSFX('main', 'dist/main.js', {
		minify: false,
		sourceMaps: false,
		config: {
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

gulp.task('builder', ['clean', 'copy-json', 'copy-html', 'copy-dali', 'build']);

gulp.task('connect', function() {	
	connect.server({
		root: 'dist'
	});
});

gulp.task('reload', function() {
	connect.reload();
});

gulp.task('watch', function () {
	gulp.watch(['src/**/*.js'], ['build']);
});

gulp.task('default', ['builder']);