var gulp = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

// can run 'gulp build'
gulp.task('build', function () {
    gulp.src('./js/app/**/*.js')
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('bist'));
});

gulp.task('jshint', function () {
    gulp.src('./js/app/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('default', ['build', 'jshint']);

