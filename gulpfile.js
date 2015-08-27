var gulp = require('gulp');
var copy = require('gulp-copy');
var imagemin = require('gulp-imagemin');

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

var imagePath = {
	src: 'src/client/app/img/*.+(jpg|jpeg|png|gif|svg)',
	dist: 'dest/client/app/img/'
};

gulp.task('imagemin', function() {
	return gulp.src(imagePath.src)
		.pipe(imagemin())
		.pipe(gulp.dest(imagePath.dist));
});

gulp.task('default', [
	'copy',
	'imagemin'
]);
