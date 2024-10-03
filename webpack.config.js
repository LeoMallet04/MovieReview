const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/indexFront.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  target: 'node'  // Garantir que o Webpack saiba que o target é Node.js
};