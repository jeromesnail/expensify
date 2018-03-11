const PUBLIC_PATH = require('path').join(__dirname, 'public');

module.exports = {
  entry: './src/app.js',
  output: {
    path: PUBLIC_PATH,
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    },{
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: PUBLIC_PATH,
    historyApiFallback: true
  }
};