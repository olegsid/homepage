const path = require('path')

const distPath = path.join(__dirname, '/dist')

const withBabel = {
  test: /\.js$/,
  exclude: /(node_modules)/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env']
    }
  }
}

const withScss = {
  test: /\.scss$/,
  use: ['style-loader', 'css-loader', 'sass-loader']
}

const withUrlLoader = {
  test: /\.(png|woff|woff2|eot|otf|ttf|svg)$/,
  loader: 'url-loader?limit=100000'
}

const config = {
  entry: {
    main: path.resolve(__dirname, './src/index.js')
  },
  output: {
    path: distPath,
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [withBabel, withScss, withUrlLoader]
  }
}

module.exports = config
