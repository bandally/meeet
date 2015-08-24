var gulp = require('gulp');

gulp.task('copy', function() {
	return gulp.src([
		'src/client/**/*.html',
		'src/client/**/*.gif',
		'src/client/**/*.jpg',
		'src/client/**/*.png',
		'src/client/**/*.css',
		'src/client/**/*.js'
	], {
		base: 'src/client'
	}).pipe(gulp.dest('dest/client'));
});
