import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();

gulp.task('sass', () => {
	gulp.src('sass/style.scss')
		.pipe($.plumber())
		// .pipe($.sourcemaps.init())
		.pipe($.sass({
			// includePaths: ['.']
			// includePaths : [require("bourbon").includePaths],
			// [outputStyle] Type: String Default: nested Values: nested, expanded, compact, compressed
			outputStyle  : 'compact',
		}).on('error', $.sass.logError))
		.pipe($.autoprefixer())
		// .pipe($.sourcemaps.write('./'))
		.pipe(gulp.dest('./public/css'));
});

gulp.task('jsLib', () => {
	gulp.src([
			'bower_components/moment/min/moment-with-locales.min.js',
			'bower_components/js-cookie/src/js.cookie.js',
			'bower_components/*/*.min.js',
		])
		.pipe($.concat('angular.js'))
		.pipe(gulp.dest('./public/js'));
});

gulp.task('js', () => {
	gulp.src([
			'js/main.js',
			'js/*/*.js',
		])
		.pipe($.plumber())
		.pipe($.babel({
			presets: ['es2015'],
			compact  : false,
			comments : false,
		}))
		// .pipe($.uglify())
		.pipe($.concat('script.js'))
		.pipe(gulp.dest('./public/js'));
});

gulp.task('watch', () => {
	gulp.watch('sass/**/*.scss',['sass']);
	gulp.watch('js/**/*.js',['js']);
});

gulp.task('build', ['sass', 'js', 'jsLib']);

gulp.task('default', ['build']);