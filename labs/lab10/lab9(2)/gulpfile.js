const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass')(require('sass'));

// Команда для компіляції Pug
gulp.task('pug', function() {
    return gulp.src('src/pug/**/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('dist'));
});

// Команда для компіляції SCSS
gulp.task('sass', function() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist'));
});

// Команда для копіювання зображень
gulp.task('images', function() {
    return gulp.src('src/png/**/*')
        .pipe(gulp.dest('dist'));
});

// Основна команда
gulp.task('default', gulp.parallel('pug', 'sass', 'images'));
