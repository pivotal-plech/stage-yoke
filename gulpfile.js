var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var sass = require('gulp-sass');
var reactify = require('reactify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var rename = require("gulp-rename");


// Restart the server for changes
gulp.task('default', ['assets'], function() {
  gulp.watch(['app/assets/javascripts/**/*.js', 'app/assets/javascripts/**/*.jsx'], ['react']);
  gulp.watch(['app/assets/stylesheets/**/*.scss'], ['sass']);
  nodemon({ script: 'server.js', ext: 'html js' });
});

gulp.task('assets', [
  'sass',
  'react',
  'pui'
]);

gulp.task('sass', function(){
  return gulp.src('./app/assets/stylesheets/application.scss')
    .pipe(sass())
    .pipe(gulp.dest('build'));
});

gulp.task('react', function() {
  var b = browserify('./app/assets/javascripts/react-components/_manifest.js');
  b.transform(reactify);

  return b.bundle()
    .pipe(source('./_manifest.js'))
    .pipe(rename('application.js'))
    .pipe(gulp.dest('build'))
});

gulp.task('pui', function() {
  return gulp.src('./vendor/**/*')
    .pipe(gulp.dest('build/'))
});


