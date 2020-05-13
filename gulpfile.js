const gulp = require('gulp');
const sass = require('gulp-sass');

const SRC = '*.scss';
const DEST = '.';

function scss() {
    return gulp.src(SRC)
        .pipe(sass({outputStyle: 'expanded'}).on("error", sass.logError))
        .pipe(gulp.dest(DEST));
}

gulp.task('sass', scss);
