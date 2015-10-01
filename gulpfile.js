var gulp = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var Server = require('karma').Server;

// can run 'gulp build'
gulp.task('buildApp', function () {
    gulp.src('./js/app/**/*.js')
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('bist'));
});

gulp.task('buildVendor', function () {
    gulp.src('./js/vendors/**/*.js')
        .pipe(concat('lib.js'))
        .pipe(uglify())
        .pipe(gulp.dest('bist'));
});

gulp.task('build', ['buildApp', 'buildVendor']);

gulp.task('test', ['jshint', 'karma']);

gulp.task('jshint', function () {
    gulp.src('./js/app/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('karma', function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

gulp.task('default', ['build', 'jshint']);

