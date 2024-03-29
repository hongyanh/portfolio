var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    // jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    // livereload = require('gulp-livereload'),
    del = require('del'),
    browserSync = require('browser-sync').create();

gulp.task('default', ['serve']);

gulp.task('styles', function() {
  return sass('sass/main.scss', { style: 'expanded' })
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('css'))
    .pipe(notify({ message: 'Styles task complete' }))
    .pipe(browserSync.stream());
});

gulp.task('serve', ['styles'], function() {

    browserSync.init({
            server: {
                baseDir: "./"
            }
        });

    gulp.watch("sass/*.scss", ['styles']);
    gulp.watch("*.html").on('change', browserSync.reload);
});