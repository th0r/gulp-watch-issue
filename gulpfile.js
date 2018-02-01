const gulp = require('gulp');
const pump = require('pump');
const babel = require('gulp-babel');

const SCRIPTS = './index.js';

gulp.task(compileScripts);
gulp.task(watch);
gulp.task('default', watch);

function compileScripts(cb) {
  pump([
    gulp.src(SCRIPTS),
    babel(),
    gulp.dest('dist')
  ], cb);
}

function watch() {
  gulp.watch(SCRIPTS, {ignoreInitial: false}, compileScripts);
}
