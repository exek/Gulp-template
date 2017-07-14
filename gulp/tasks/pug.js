module.exports = (gulp, plugins, config) => () =>
  gulp
    .src(`${config.src.components}/*.pug`)
    .pipe(
      config.onError(err => ({
        title: 'Pug',
        message: err.message
      }))
    )
    .pipe(plugins.pug({ pretty: true }))
    .pipe(gulp.dest(config.build.html))
    .pipe(config.server.stream());
