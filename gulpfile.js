/**
 * Created by Владимир on 17.10.2016.
 */
var gulp           = require('gulp'),
    less           = require('gulp-less'),
    LessAutoprefix = require('less-plugin-autoprefix'),
    autoprefix     = new LessAutoprefix({ browsers: ['last 3 versions'] }),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('less', function () {
    return gulp.src('./less/style.less')
        .pipe(less({
            plugins: [autoprefix],
            compress: true,
        }))
        .pipe(gulp.dest('./css'));
});

gulp.task('js', function () {
    return gulp.src(['./js/app.js', './js/factories/*.js', './js/directives/*.js', './js/controller/*.js'])
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./js'));
});

gulp.task('watch', ['less', 'js'], function() {
    gulp.watch('./less/**/*.less', ['less']);
    gulp.watch('./js/**/*.js', ['js']);
});

gulp.task('default', ['watch']);