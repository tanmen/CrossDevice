const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');

// web/webpack.config.js

// This is needed for webpack to compile JavaScript.
// Many OSS React Native packages are not compiled to ES5 before being
// published. If you depend on uncompiled packages they may cause webpack build
// errors. To fix this webpack can be configured to compile to the necessary
// `node_module`.
const babelLoaderConfiguration = {
  test: /\.js$/,
  // Add every directory that needs to be compiled by Babel during the build
  include: [
    path.resolve(__dirname, '../../src'),
    path.resolve(__dirname, '../../node_modules/react-native-uncompiled')
  ],
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      // This aliases 'react-native' to 'react-native-web' and includes only
      // the modules needed by the app
      plugins: ['react-native-web/babel'],
      // The 'react-native' preset is recommended (or use your own .babelrc)
      presets: ['react-native']
    }
  }
};

// This is needed for webpack to import static images in JavaScript files
const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png|svg)$/,
  use: {
    loader: 'url-loader',
    options: {
      name: '[name].[ext]'
    }
  }
};

module.exports = {
  // ...the rest of your config
  entry: {
    app: path.join(__dirname, '../../index.web.js'),
  },

  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].js',
    publicPath: 'http://localhost:3000/',
  },

  node: {
    __filename: true,
    __dirname: true,
  },

  module: {
    rules: [
      babelLoaderConfiguration,
      imageLoaderConfiguration
    ],
  },

  plugins: [
    new InterpolateHtmlPlugin({
      PUBLIC_URL:'http://localhost:3000',
    }),
    // Generates an `index.html` file with the <script> injected.
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, '../public/index.html'),
    }),
    // `process.env.NODE_ENV === 'production'` must be `true` for production
    // builds to eliminate development checks and reduce build size. You may
    // wish to include additional optimizations.
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],

  resolve: {
    alias: {
      'react-native': 'react-native-web'
    },
    // If you're working on a multi-platform React Native app, web-specific
    // module implementations should be written in files using the extension
    // `.web.js`.
    extensions: [ '.web.js', '.js' ]
  }
};
