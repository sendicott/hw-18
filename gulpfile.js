let gulp = require('gulp');
let smush = require('gulp-browserify');
let watch = require('gulp-watch');

gulp.task('default', ['html', 'js']);

gulp.task('html', function () {
    return gulp.src('index.html')
        .pipe(gulp.dest('public/'));
});

gulp.task('js', function () {
    return gulp.src('app.js')
        .pipe(smush())
        .pipe(gulp.dest('public/'));
});

gulp.task('watch', function() {
    gulp.watch('index.html', ['html']);
    gulp.watch('app.js', ['js']);
});