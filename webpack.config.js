const webpack = require('webpack');
const path = require('path');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');


module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  watch:true,
  plugins: [

    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: 'localhost',
      port: 3000,
      server: {
        baseDir: ['']
      },
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './'),
  },
  module: {
    rules: [{
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize:true
          }
        }]
      },

      // Loaders for other file types can go here
    ],
  },






}
