const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  optimization: {
    minimize: true
  },
  performance: {
    hints: false
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'worker.js'
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        type: 'javascript/auto',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Doggooo Land',
      template: 'index.html'
    })
  ]
};
