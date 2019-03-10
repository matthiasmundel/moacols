var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('css', function(){
  return gulp.src('scss/*.scss')
    .pipe(sass({noCache: true}))
    .pipe(gulp.dest('css'))
});

gulp.task( 'watch', function() {
  gulp.watch('scss/*.scss', gulp.parallel('css'));
});

gulp.task( 'default', gulp.parallel('css', 'watch'));