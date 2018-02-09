const gulp = require('gulp');
const cachebust = require('gulp-cache-bust');

gulp.task('cachebust', () =>
    gulp.src('./index.html')
    .pipe(cachebust({
        type: 'timestamp'
    }))
    .pipe(gulp.dest('./'))
);
