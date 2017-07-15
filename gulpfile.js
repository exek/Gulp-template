const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const path = require('path');

const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
const config = require('./gulp/config')(__dirname, isDev);

const getTask = task =>
  require(path.resolve(config.tasks, task))(gulp, plugins, config);

gulp.task('sass', getTask('sass'));
gulp.task('pug', getTask('pug'));
gulp.task('webpack', getTask('webpack').webpack);
gulp.task('images', getTask('images'));
gulp.task('server', getTask('server'));
gulp.task('clean', getTask('clean'));

// watch
gulp.task('webpack:watch', getTask('webpack').watch);
gulp.task('pug:watch', () =>
  gulp.watch(`${config.src.components}/**/*.pug`, ['pug'])
);
gulp.task('sass:watch', () =>
  gulp.watch(`${config.src.components}/**/*.sass`, ['sass'])
);
gulp.task('watch', ['webpack:watch', 'pug:watch', 'sass:watch']);

// default
gulp.task('default', ['server', 'watch', 'pug', 'sass', 'webpack']);
