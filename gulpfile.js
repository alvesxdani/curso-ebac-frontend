// Requires
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')
const imagemin = require('gulp-imagemin')

// Compilador SASS
function handleWatch() {
  console.log('SASS is watching...\n JS compressing is watching...')
}
function compileScss() {
  return gulp
    .src(['./style/in/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(sourcemaps.write('./map'))
    .pipe(gulp.dest('./style/out/'))
}

// Compress JS
function compressingJS() {
  return gulp
    .src('./scripts/in/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./scripts/out/'))
}

// Compress Images
function compressingImg() {
  return gulp
  .src('./images/in/*')
  .pipe(imagemin())
  .pipe(gulp.dest('./images/out'));
}

// Para execução das tarefas
exports.default = () => {
  console.log('Iniciando tarefas...')
}

exports.sass = compileScss
exports.js = compressingJS
exports.image = compressingImg

exports.watchSASS = function () {
  gulp.watch(['./style/in/**/*'], gulp.parallel([handleWatch, compileScss]))
}

exports.watchJS = function () {
  gulp.watch(['./scripts/in/*.js'], gulp.series(compressingJS))
}

exports.watchImg = function () {
  gulp.watch(['./images/in/*'], gulp.series(compressingImg))
}
