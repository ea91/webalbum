var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', ['watch']);

//style paths
var sassFiles = 'src/**/*.scss',
    cssDest = 'assets/';

gulp.task('styles', function () {
    gulp.src(sassFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest(cssDest));
});

gulp.task('watch', function () {
    gulp.watch(sassFiles, ['styles']);
});

