const gulp = require('gulp');
const minifyScript = require('gulp-uglify');
const minifyCss = require('gulp-clean-css');
const minifyImg = require('gulp-image');
const webserver = require('gulp-webserver');

//压缩js
gulp.task('script', () => {
        return gulp.src('./js/*.js')
            .pipe(minifyScript())
            .pipe(gulp.dest('./dist/js'))
    })
    //压缩css
gulp.task('css', () => {
        return gulp.src('./css/*.css')
            .pipe(minifyCss())
            .pipe(gulp.dest('./dist/css'))
    })
    //压缩img
gulp.task('img', () => {
        return gulp.src('./images/*.jpg')
            .pipe(minifyImg())
            .pipe(gulp.dest('./dist/images'))
    })
    //gulp起服务
gulp.task('webserver', () => {
    gulp.src('./')
        .pipe(webserver({
            port: 8080,
            open: true,
            livereload: true
        }))
})

//watch监视
// gulp.task('watch', gulp.series('./'))