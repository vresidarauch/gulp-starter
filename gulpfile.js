const gulp = require("gulp");
const pump = require("pump");

const composer = require("gulp-uglify/composer");
const uglifyjs = require("uglify-es");
const uglify = composer(uglifyjs, console);

const browserSync = require("browser-sync").create();

gulp.task("hello", function() {
  console.log("Hello everyone!");
});

// Compress our JS using gulp-uglify and uglify-es (and pump)
gulp.task("compress", function(cb) {
  pump([gulp.src("src/js/*.js"), uglify(), gulp.dest("dist/js")], cb);
});

gulp.task("watch", ["browserSync"], function() {
  gulp.watch("src/*.html", browserSync.reload);
  gulp.watch("src/js/*.js", browserSync.reload);
});

gulp.task("browserSync", function() {
  browserSync.init({
    server: {
      baseDir: "src"
    }
  });
});
