const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const svg = require('gulp-svg-sprite');

gulp.task('svg', function () {
    return gulp.src('./public/svg/*.svg')
        .pipe(svg({
            mode: {
                stack: {
                    sprite: "../sprite.svg"
                }
            },
        }
        ))
        .pipe(gulp.dest('./public/'));
});
gulp.task('sass-compile', function () {
    return gulp.src('./public/scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/css'));
})

gulp.task('watch', function () {
    gulp.watch('./public/scss/**/*.scss', gulp.series('sass-compile'))
})