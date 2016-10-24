var gulp = require('gulp'),
	browser = require('browser-sync').create(),
	sass = require('gulp-sass'),
	reload = browser.reload;

gulp.task('server', function () {
	browser.init({
		server : {
			baseDir : './'
		}
	});
});

gulp.task('sass', function () {
	gulp.src('css/*.{scss, sass}')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('css'));
});

gulp.task('watch', function () {
	gulp.watch('*.html').on('change', reload);
	gulp.watch('*/*.css').on('change', reload);
	gulp.watch('css/*.{scss, sass}', ['sass']).on('change', reload);
	gulp.watch('*/*.js').on('change', reload);
});

gulp.task('default', ['server', 'sass', 'watch']);