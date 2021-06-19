const path = require('path');

module.exports = {
  mode: 'production',
  entry: __dirname + '/src/scripts/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public', 'dist')
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'
            ]
          }
        }
      }
    ]
  },
  devtool: 'source-map'
};
