var gulp = require('gulp'),
	browser = require('browser-sync').create(),
	reload = browser.reload;

gulp.task('server', function(){
	browser.init({
		server : {
			baseDir: './'
		}
	});
});

gulp.task('watch', function(){
	gulp.watch('**/**/*.html').on('change', reload);
	gulp.watch('*/*/**/*.js').on('change', reload);
	gulp.watch('*/*/**/*.css').on('change', reload);
});

gulp.task('default', ['server', 'watch']);