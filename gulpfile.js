var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var sass = require('gulp-sass');
var reactify = require('reactify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var rename = require("gulp-rename");
var jade = require('gulp-jade');

// Restart the server for changes
gulp.task('default', ['assets'], function() {
  gulp.watch(['app/assets/javascripts/**/*.js', 'app/assets/javascripts/**/*.jsx'], ['react']);
  gulp.watch(['app/assets/stylesheets/**/*.scss'], ['sass']);
  gulp.watch(['app/views/**/*.jade'], ['jade']);
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

gulp.task('jade', function() {
  var YOUR_LOCALS = {
    jade: jade,
    pretty: true
  };
  gulp.src('./app/views/**/*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('./build/'))
});
