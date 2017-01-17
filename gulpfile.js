'use strict';
 
var gulp = require('gulp'),
	autoprefixer = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
	sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('./assets/sass/**/*.scss')
    	.pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))    
      .pipe(autoprefixer())
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./assets/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./assets/sass/**/*.scss', ['sass']);
});