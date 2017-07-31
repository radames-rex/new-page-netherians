'use strict';

var gulp = require('gulp'),
  sass = require('gulp-sass'),
  concat = require('gulp-concat'),
  clean = require('gulp-clean'),
  server = require('gulp-server-livereload'),
  port = 8080;

// Compila Sass para Css
gulp.task('sass', function() {
  return gulp.src([
      'src/assets/stylesheets/sass/reset.scss',
      'src/assets/stylesheets/sass/fonts.scss',
      'src/assets/stylesheets/sass/layout.scss',
      'src/assets/stylesheets/sass/base.scss',
      'src/assets/stylesheets/sass/header.scss',
      'src/assets/stylesheets/sass/**/*.scss',
      'src/assets/stylesheets/sass/footer.scss',
      'src/assets/stylesheets/sass/shame.scss'
    ])
    .pipe(concat('app.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/assets/stylesheets/'));
});

// Gera um build para deploy no servidor
gulp.task('build', function() {
  return gulp.src([
      'src/**',
      '!src/.temp/',
      '!src/assets/stylesheets/sass',
      '!src/**/DS.Store'
    ])
    .pipe(gulp.dest('dist/'));
});

// Observa mudanças para fazer reload
gulp.task('watch', function() {
  gulp.watch('src/assets/stylesheets/sass/**/*.scss', ['sass']);
});

// Inicia o servidor
gulp.task('default', ['watch'], function() {
  gulp.src('src/')
    .pipe(server({
      livereload: true,
      open: true,
      port: port
    }));
});
