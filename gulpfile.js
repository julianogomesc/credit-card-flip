const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');
const rename = require('gulp-rename');

async function compilescss () {
    gulp.src('./sass/*.scss')
        .pipe(sass())
        .pipe(prefix())
        .pipe(minify())
        .pipe(rename(function (path) {
            return {
            dirname: path.dirname + "",
            basename: path.basename + ".min",
            extname: ".css"
            };
        }))
        .pipe(gulp.dest('./css'))
};

gulp.task('watch',function(){
    gulp.watch('./sass/*.scss', compilescss)
});