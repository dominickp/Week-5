var gulp = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');

// can run 'gulp copy'
gulp.task('concat', function () {
    gulp.src('./js/app/**/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('bist'));
});

gulp.task('jshint', function () {
    gulp.src('./js/app/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('default', ['concat', 'jshint']);

