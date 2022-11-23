const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'));
const clean = require('gulp-clean');

gulp.task('css', () => {
    return gulp.src('css/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({cascade: false}))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('build/stylesheets'));
});


gulp.task('clean', function () {
    return gulp.src('build/stylesheets/*.css', {read: false})
        .pipe(clean())
});

gulp.task('default', gulp.series(['clean', 'css']));