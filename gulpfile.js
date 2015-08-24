var gulp = require('gulp');

gulp.task('copy', function() {
	return gulp.src([
		'src/**/*.html',
		'src/**/*.css',
		'src/**/*.js'
	], {
		base: 'src'
	}).pipe(gulp.dest('dest'));
});
