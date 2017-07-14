const del = require('del');

module.exports = (gulp, { util }, config) => () =>
  gulp.task('clean', cb =>
    del([config.build.root]).then(paths =>
      util.log('Deleted:', util.colors.magenta(paths.join('\n')))
    )
  );
