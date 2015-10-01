var gulp = require('gulp');


// can run 'gulp copy'
gulp.task('copy', function(){
    gulp.src('./js/**/*.js')
        .pipe(gulp.dest('bist'));
});

