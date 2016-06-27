var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssnext = require('postcss-cssnext');
var watch = require('gulp-watch');
var atImport = require('postcss-import');
var rename = require('gulp-rename');
var cssnano = require('gulp-cssnano');
var runSequence = require('run-sequence');

gulp.task('css', function() {
  var processors = [atImport, cssnext({browsers: ['last 1 version']})];
  return gulp.src(['./hui.css'])
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dist/'))
    .pipe(cssnano())
    .pipe(rename('hui.min.css'))
    .pipe(gulp.dest('./dist/'));
  });
