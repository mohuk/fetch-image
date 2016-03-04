const gulp = require('gulp');
const concat = require('gulp-concat');
const ngAnnotate = require('gulp-ng-annotate');
const uglify = require('gulp-uglify');

gulp.task('default', () => {
  return gulp.src('./lib/*.js')
    .pipe(ngAnnotate())
    .pipe(gulp.dest('./dist/'));
});


gulp.task('build', () => {
  return gulp.src(['dist/*.js'])
    .pipe(concat('index.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'));
});
