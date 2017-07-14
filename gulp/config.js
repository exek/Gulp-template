const path = require('path');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const server = require('browser-sync').create();

// config
const config = (root, isDev) => {
  const src = path.resolve(root, 'src');
  const build = path.resolve(root, 'build');

  return {
    tasks: path.resolve(root, 'gulp/tasks'),
    server,
    isDev,
    src: {
      root: src,
      components: path.resolve(src, 'components'),
      js: path.resolve(src, 'js'),
      img: path.resolve(src, 'img')
    },
    build: {
      root: build,
      html: build,
      css: path.resolve(build, 'css'),
      js: path.resolve(build, 'js'),
      img: path.resolve(build, 'img')
    },
    onError: cb => plumber({ errorHandler: notify.onError(cb) })
  };
};

module.exports = config;
