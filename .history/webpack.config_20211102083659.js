const path = require('path')
module.exports = {
  entry: {
    index: './lib/index.tsx'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: ["node_modules", path.resolve(__dirname, "lib")]
  },
  output: {
    library: "wood-components",
    path: path.resolve(__dirname, 'dist/lib'),
    libraryTarget: 'umd',
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
}