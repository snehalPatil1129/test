var gulp = require('gulp');
var connect = require('gulp-connect-multi')();

gulp.task('connect', connect.server({
  root: ['app'],
  port: 9999,
  livereload: true,
  open: {
    browser: 'chrome'
  }
}));

gulp.task('default', ['connect']);