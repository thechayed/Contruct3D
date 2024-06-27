const path = require('path');

module.exports = {
  entry: '../Editor.js', // The entry point of your application
  output: {
    filename: 'C3D_Editor_Webpack.js', // The name of the output file
    path: path.resolve(__dirname, '../../Chrome Plugin/Webpacked Editor'), // The directory where the output will be placed
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Test for JavaScript files
        exclude: /node_modules/, // Exclude node_modules from being bundled
        use: {
          loader: 'babel-loader', // Use Babel loader for transpiling ES6+ code
        },
      },
    ],
  },
};
