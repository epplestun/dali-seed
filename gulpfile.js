var gulp = require('gulp');
var del = require('del');
var connect = require('gulp-connect');
var preprocess = require('gulp-preprocess');
var Builder = require('systemjs-builder');
var builder = new Builder();

gulp.task('clean', function(cb) {
  return del(['dist/main.js'], cb);
});

gulp.task('copy-json', function() {
	return gulp.src('src/**/*.json')
    .pipe(gulp.dest('dist/data/'));
});

gulp.task('copy-html:dev', function() {
   return gulp.src('src/**/*.html')
   	.pipe(preprocess({
   		context: { NODE_ENV: 'development' }
   	}))
    .pipe(gulp.dest('dist'));
});
gulp.task('copy-html:pro', function() {
   return gulp.src('src/**/*.html')
   	.pipe(preprocess({
   		context: { NODE_ENV: 'production' }
   	})) 
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

gulp.task('build:pro', ['clean', 'copy-json', 'copy-html:pro', 'copy-dali', 'build']);

gulp.task('connect:pro', function() {	
	connect.server({
		root: 'dist',
		livereload: true
	});
});

gulp.task('connect:dev', function() {	
	connect.server({
		livereload: true
	});
});

gulp.task('reload', function() {
	connect.reload();
});

gulp.task('watch', function () {
	gulp.watch('src/**/*.html', ['copy-html:dev', 'reload']);
});

gulp.task('default', ['copy-html:dev','copy-dali', 'connect:dev' , 'watch']);