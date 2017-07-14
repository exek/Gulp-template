const path = require('path');

module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build/js')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: { presets: ['es2015'] }
          }
        ]
      },
      {
        test: /\.glsl$/,
        use: 'webpack-glsl-loader'
      }
    ]
  }
};
