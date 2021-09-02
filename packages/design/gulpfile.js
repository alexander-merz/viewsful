const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildTask() {
  return src('scss/index.scss').pipe(sass()).pipe(dest('css'))
}

function watchTask() {
  watch(['scss'], buildTask)
}

exports.default = series(buildTask, watchTask)
