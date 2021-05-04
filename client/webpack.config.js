module.exports = {
  // change to .tsx if necessary
  entry: './src/app.tsx',
  output: {
    filename: './bundle.js'
  },
  resolve: {
    // changed from extensions: [".js", ".jsx"]
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  // {
  //   test: /\.tsx?$/,
  //   exclude: /node_modules/,
  //   loader: 'ts-loader'
  // }
}
