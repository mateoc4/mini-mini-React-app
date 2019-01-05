const gulp = require("gulp");
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const notifier = require('node-notifier');

sass.compiler = require('node-sass');

function showError(err) {

    notifier.notify({
        title: 'Błąd SASS',
        message: err.messageFormatted
      });

    console.log(err.messageFormatted);
    this.emit('end');
};

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        notify: false, //czy pokazywać tooltipa
        //host: "192.168.0.24", //IPv4 Address Wirless LAN adapter WiFi from ipconfig
        //port: 3000, //port na którym otworzy
        //browser: "google chrome" //jaka przeglądarka ma być otwierana - zaleznie od systemu - https://stackoverflow.com/questions/24686585/gulp-browser-sync-open-chrome-only
    });
});


gulp.task('sass', function () {
    return gulp.src('./scss/main.scss')
        .pipe(sourcemaps.init()) 
      .pipe(sass({
        outputStyle: 'compressed'
      }).on('error', showError))
      .pipe(autoprefixer({
            browsers: ['last 2 versions'],
        }))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./css'))
      .pipe(browserSync.stream());
});

gulp.task('watch', function () {
    gulp.watch('./scss/**/*.scss', ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});
   
gulp.task("default", function() {
    console.log("============= Rozpoczynam pracę ============");
    gulp.start(['browser-sync', 'sass', 'watch']);
});