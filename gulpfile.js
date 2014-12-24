var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var sass = require('gulp-sass');
var reactify = require('reactify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var rename = require("gulp-rename");


// Restart the server for changes
gulp.task('default', function(){
  nodemon({ script: 'server.js', ext: 'html js' });
});

gulp.task('sass', function(){
  gulp.src('./app/assets/stylesheets/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./app/assets/stylesheets/css'));
});

gulp.task('react', function() {
  var b = browserify('./app/assets/javascripts/react-components/_manifest.js');
  b.transform(reactify);

  return b.bundle()
    .pipe(source('./_manifest.js'))
    .pipe(rename('main.js'))
    .pipe(gulp.dest('app/assets/javascripts'))
});
