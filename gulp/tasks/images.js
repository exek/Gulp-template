const pngquant = require('imagemin-pngquant');
const mozjpeg = require('imagemin-mozjpeg');

module.exports = (gulp, plugins, config) => () =>
  gulp
    .src(`${config.src.img}/**/*.*`)
    .pipe(
      plugins.imagemin(
        [
          pngquant({
            quality: 70
          }),
          mozjpeg({
            progressive: true
          })
        ],
        {
          verbose: true
        }
      )
    )
    .pipe(gulp.dest(config.build.img));
