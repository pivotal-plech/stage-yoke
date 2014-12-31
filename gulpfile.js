var _ = require('lodash');
var gulp = require('gulp');
var sass = require('gulp-sass');
var reactify = require('reactify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var rename = require("gulp-rename");
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var nodemon = require('gulp-nodemon');

// Restart the server for changes
gulp.task('default', ['assets', 'browser-sync'], function() {
  gulp.watch(['app/assets/javascripts/**/*.js', 'app/assets/javascripts/**/*.jsx'], ['react']);
  gulp.watch(['app/assets/stylesheets/**/*.scss'], ['sass']);
  gulp.watch(['app/assets/images/**/*'], ['images']);
});


gulp.task('assets', [
  'sass',
  'react',
  'pui',
  'images'
]);

gulp.task('sass', function(){
  return gulp.src('./app/assets/stylesheets/application.scss')
    .pipe(sass())
    .pipe(gulp.dest('build'))
    .pipe(reload({stream:true}));
});

gulp.task('react', function() {
  var b = browserify('./app/assets/javascripts/react-components/application.jsx');
  b.transform(reactify);

  return b.bundle()
    .pipe(source('./application.jsx'))
    .pipe(rename('application.js'))
    .pipe(gulp.dest('build'))
    .pipe(reload({stream:true}));
});

gulp.task('pui', function() {
  return gulp.src('./vendor/**/*')
    .pipe(gulp.dest('build/'))
});

gulp.task('images', function() {
  return gulp.src('./app/assets/images/*')
    .pipe(gulp.dest('build/images/'))
});

gulp.task('browser-sync', ['nodemon'], function() {
  browserSync.init(null, {
    proxy: "http://localhost:3000",
    browser: "google chrome",
    port: 7000,
  });
});

gulp.task('nodemon', function (done) {
  var callback = _.once(done);
  return nodemon({
    script: 'server.js'
  }).on('start', function () {
    callback();
  });
});
