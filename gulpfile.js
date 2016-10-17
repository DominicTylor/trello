/**
 * Created by Владимир on 17.10.2016.
 */
var gulp           = require('gulp'),
    less           = require('gulp-less'),
    LessAutoprefix = require('less-plugin-autoprefix'),
    autoprefix     = new LessAutoprefix({ browsers: ['last 3 versions'] });

gulp.task('less', function () {
    return gulp.src('./less/style.less')
        .pipe(less({
            plugins: [autoprefix],
            compress: true,
        }))
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', ['less'], function() {
    gulp.watch('./less/**/*.less', ['less']);
});

gulp.task('default', ['watch']);