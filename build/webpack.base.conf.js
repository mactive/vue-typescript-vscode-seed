var path = require('path')
var utils = require('./utils')
var config = require('../config')
// var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.html', '.css', '.scss', '.sass'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules|vue\/src/,
        loader: 'ts-loader',
        // options: {
        //   appendTsSuffixTo: [/\.vue$/]
        // }
      },
      // Support for CSS as raw text
      // { 
      //   test: /\.css$/,
      //   include: [
      //     path.resolve(__dirname, "not_exist_path")
      //   ],
      //   loaders: [ 'style-loader', 'css-loader' ]
      // },
      // {
      //   test: /\.less$/,
      //   use: [{
      //       loader: "style-loader" // creates style nodes from JS strings
      //   }, {
      //       loader: "css-loader" // translates CSS into CommonJS
      //   }, {
      //       loader: "less-loader" // compiles Less to CSS
      //   }]
      // },
      // {
      //   test: /\.(scss|sass)$/,
      //   use: [{
      //       loader: "style-loader" // creates style nodes from JS strings
      //   }, {
      //       loader: "css-loader" // translates CSS into CommonJS
      //   }, {
      //       loader: "sass-loader" // compiles Sass to CSS
      //   }]
      // },
      // support for .html as raw text
      { 
        test: /\.html$/, 
        loader: 'raw-loader', 
        exclude: [ ] 
      },
      // 
      // {
      //   test: /\.vue$/,
      //   loader: 'vue-loader',
      //   options: vueLoaderConfig
      // },
      //
      // we have typescript so we don't need babel
      // {
      //   test: /\.js$/,
      //   loader: 'babel-loader',
      //   include: [resolve('src'), resolve('test')]
      // },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
