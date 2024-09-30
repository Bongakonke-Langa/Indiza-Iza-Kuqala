const path = require('path'); // Ensure this line is present at the top


module.exports = {
  mode: 'development', // Set the mode to 'development'
  entry: './src/index.js',
  output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
  },
  
};

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};