module.exports = (gulp, plugins, config) => () =>
  gulp.task('server', () => {
    config.server.init({
      server: {
        baseDir: config.build.root,
        directory: false
      }
    });
  });
