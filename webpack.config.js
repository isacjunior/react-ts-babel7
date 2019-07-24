const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { name } = require('./package.json')

module.exports = {

  devServer: {
    historyApiFallback: true,
  },

  mode: 'development',

  entry: {
    [`${name}-main`]: './src/index.tsx',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    publicPath: '/',
  },

  resolve: {
    alias: {
      containers: path.resolve(__dirname, './src/containers')
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
      name: `${name}-vendor`,
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Typescript Babel 7',
      template: './src/index.html',
    }),
    new CleanWebpackPlugin(),
  ],

}
