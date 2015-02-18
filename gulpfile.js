var _ = require('lodash');
var sass = require('gulp-sass');
var gulp = require('gulp');
var bourbon = require('node-bourbon').includePaths;
var reactify = require('reactify');
var del = require('del');
var notify = require("gulp-notify");
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var rename = require("gulp-rename");
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var nodemon = require('gulp-nodemon');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

var config = {
  sassPath: './app/assets/stylesheets',
}

// Restart the server for changes
gulp.task('default', ['assets', 'browser-sync'], function() {
  gulp.watch(['app/assets/javascripts/**/*.js', 'app/assets/javascripts/**/*.jsx'], ['react']);
  gulp.watch(['app/assets/stylesheets/**/*.scss'], ['css']);
  gulp.watch(['app/assets/images/**/*'], ['images']);
});

gulp.task('build', ['clean', 'assets'], function(){});

gulp.task('assets', [
  'css',
  'react',
  'pui',
  'images',
]);

gulp.task('images', function () {
  return gulp.src('app/assets/images/*')
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
    }))
    .pipe(gulp.dest('build/images/'));
});

gulp.task('css', function() { 
  return gulp.src(config.sassPath + '/application.scss')
    .pipe(sass({
      style: 'expanded',
      includePaths: ['./app/assets/stylesheets'].concat(bourbon),
    }))
    .pipe(gulp.dest('./build'));
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

gulp.task('clean', function(done) {
  del(['./build/*.css', './build/**/*', './build/*.js'], {force: true}, done);
});

gulp.task('browser-sync', ['nodemon'], function() {
  browserSync.init(null, {
    proxy: "http://localhost:3000",
    browser: "google chrome",
    open: false,
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
