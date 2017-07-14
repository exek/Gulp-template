const autoprefixer = require('autoprefixer');
const mqpacker = require('css-mqpacker');

module.exports = (
  gulp,
  { sourcemaps, sass, if: gulpIf, postcss },
  config
) => () =>
  gulp
    .src(`${config.src.components}/*.sass`)
    .pipe(
      config.onError(err => ({
        title: 'Jade',
        message: err.message
      }))
    )
    .pipe(gulpIf(!config.isDev, sourcemaps.init()))
    .pipe(sass({ pretty: true }))
    .pipe(
      postcss([
        autoprefixer({
          browsers: ['last 2 versions', '> 2%']
        }),
        mqpacker()
      ])
    )
    .pipe(gulpIf(!config.isDev, sourcemaps.write()))
    .pipe(gulp.dest(config.build.css))
    .pipe(config.server.stream());
