const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'eval-cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.vue', '.js', '.scss', '.json'],
    alias: {
      '@': path.join(__dirname, '../src'),
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html')
    })
  ],
  devServer: {
    port: 9100,
    hot: true,
    historyApiFallback: true,
    headers: {
      'ACCESS-CONTROL-ALLOW-ORIGIN': '*',
    }
  }
}