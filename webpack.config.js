const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: `[hash:5]-bundle.js`,
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$ /,
        use : 'css-loader'
      },
      {
        test: /\.[png|jpg|svg]$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'img',
            name: `[name]-[sha1:hash:5].[ext]`
        }}]
      }
    ],
    plugins: [
      
    ]
  }
 }