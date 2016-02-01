var gulp    = require('gulp');
var sass    = require('gulp-sass');
var concat  = require('gulp-concat');
var uglify  = require('gulp-uglify');
var plumber = require('gulp-plumber');

gulp.task('sass', function()
{
	gulp.src('sass/style.scss')
		.pipe(plumber())
		// [outputStyle] Type: String Default: nested Values: nested, expanded, compact, compressed
		.pipe(sass({outputStyle  : 'expanded',}))
		.pipe(gulp.dest('./css'));
});

gulp.task('js', function()
{
	gulp.src([
			'bower_components/moment/min/moment-with-locales.min.js',
			'bower_components/*/*.min.js',
		])
		.pipe(plumber())
		.pipe(concat('lib.js'))
		.pipe(gulp.dest('./js'));

	// gulp.src(['js/main.js', 'js/*/*.js'])
	// 	.pipe(plumber())
	// 	// .pipe(uglify())
	// 	.pipe(concat('script.js'))
	// 	// .pipe(uglify())
	// 	.pipe(gulp.dest('./public/js'));
});

gulp.task('watch', function()
{
	gulp.watch('sass/**/*.scss',['sass']);
	gulp.watch('js/**/*.js',['js']);
});

gulp.task('default', ['sass', 'js']);