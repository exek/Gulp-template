const webpack = require('webpack');
const webpackConfig = require('../../webpack.config');

module.exports = (gulp, plugins, config) => {
  const handler = (err, stats, cb) => {
    const errors = stats.compilation.errors;

    if (errors.length > 0) {
      plugins.notify
        .onError({
          title: 'Webpack Error',
          message: '<%= error.message %>',
          sound: 'Submarine'
        })
        .call(null, errors[0]);
    }

    plugins.util.log(
      '[webpack]',
      stats.toString({
        colors: true,
        chunks: false
      })
    );

    config.server.reload();
    if (typeof cb === 'function') cb();
  };

  return {
    webpack: () =>
      gulp.task('webpack', cb => {
        webpack(webpackConfig).run((err, stats) => {
          handler(err, stats, cb);
        });
      }),
    watch: () =>
      gulp.task('webpack:watch', cb => {
        webpack(webpackConfig).watch(
          {
            aggregateTimeout: 100,
            poll: false
          },
          handler
        );
      })
  };
};
