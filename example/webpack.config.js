const path = require('path')

module.exports = (env) => {
  return {
    mode: env,
    entry: './index.tsx',
    output: {
      filename: 'bundle.js',
    },
    resolve: {
      // Ensure we always use a single copy of libraries (e.g. React)
      modules: [path.resolve(__dirname, 'node_modules')],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: ['ts-loader'],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
              },
            },
          ],
        },
      ],
    },
  }
}
