var config = require('./configuration');

var gulp = require('gulp-help')(require('gulp'));
var gulpif = require('gulp-if');
var gutil = require('gulp-util');
var gzip = require('gulp-gzip');
var rename = require('gulp-rename');

var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');

var csscomb = require('gulp-csscomb');

var autoprefixerOptions = config.autoprefixerOptions;
var gzipOptions = config.gzipOptions;

var useMinifiedSources = gutil.env.min;
var useGzippedSources = gutil.env.gzip;

gulp.task('sass', 'Compile sass files to dist folder', ['sprites'], function(done) {
    return gulp.src('./scss/guide.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', function(err) {
            process.stderr.write(new gutil.PluginError('sass', err.messageFormatted).toString() + '\n');
            done(1);
        }))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(rename('CoveoStyleGuide.css'))
        .pipe(sourcemaps.write('../css'))
        .pipe(gulp.dest('./dist/css'))
        .pipe(gulpif(useMinifiedSources, minifyCSS({
            keepSpecialComments: 0,
            processImport: false
        })))
        .pipe(gulpif(useGzippedSources, gzip(gzipOptions)))
        .pipe(gulpif(useMinifiedSources, rename('CoveoStyleGuide.min.css')))
        .pipe(gulpif(useMinifiedSources, gulp.dest('./dist/css')));
});

gulp.task('sass:format', function() {
    return gulp.src(['./scss/**/*.scss', '!./scss/sprites.scss', '!./scss/utility/colors.scss', '!./scss/utility/border.scss'])
        .pipe(csscomb())
        .pipe(gulp.dest('./scss'));
});

function sassError(err, doneCallback) {
    process.stderr.write(new gutil.PluginError('sass', err.messageFormatted).toString() + '\n');
    doneCallback(1);
}
