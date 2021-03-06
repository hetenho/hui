var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssnext = require('postcss-cssnext');
var watch = require('gulp-watch');
var atImport = require('postcss-import');
var rename = require('gulp-rename');
var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');
var browserify = require('gulp-browserify');
var browserSync = require('browser-sync').create();

gulp.task('css', function() {
  var processors = [atImport, cssnext({browsers: ['last 1 version']})];
  return gulp.src(['./hui.css'])
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dist/'))
    .pipe(cssnano())
    .pipe(rename('hui.min.css'))
    .pipe(gulp.dest('./dist/'))
    .pipe(browserSync.stream());
  });

gulp.task('js', function() {
  return gulp.src(['hui.js'])
    .pipe(browserify({
		  insertGlobals : true
		}))
    .pipe(gulp.dest('./dist/'))
    .pipe(browserSync.stream());
  });

// Static server
gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    },
    port: 3002
  });
  gulp.watch(['**/*.css'], ['css']);
  gulp.watch(['js/**/*.js', 'hui.js'], ['js']);
});

gulp.task('default', function() {
  runSequence(['serve']);
});
