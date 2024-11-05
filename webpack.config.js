const path = require('path');

module.exports = {
  mode: 'development', // or 'production'
  entry: './app/page.tsx', // Entry point for your application
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Match .ts and .tsx files
        use: 'ts-loader', // Use ts-loader for processing
        exclude: /node_modules/, // Exclude node_modules
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // Resolve these extensions
  },
  optimization: {
    // Any optimization settings (optional)
  },
  plugins: [
    // Any plugins you may need (optional)
  ],
};
