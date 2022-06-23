const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        filename :'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    devtool: 'source-map',
    devServer: {
        port: 8080,
        hot: false
      },
      module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /(node_modules)/,
              use: ['babel-loader']
            },
            {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader']
            }
        ]
      }
}