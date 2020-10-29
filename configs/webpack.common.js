const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

const isEnvDevelopment = process.env.NODE_ENV === 'development'

const cssLoaders = (extra) => {
  const loaders = [
    'isomorphic-style-loader',
    {
      loader: MiniCSSExtractPlugin.loader,
      options: {
        xmr: isEnvDevelopment,
        reloadAll: true,
        publicPath: '/',
      },
    },
    {
      loader: 'css-loader',
      options: {
        modules: true,
      },
    },
  ]

  if (extra) {
    loaders.push(extra)
  }

  return loaders
}

module.exports = {
  mode: isEnvDevelopment ? 'development' : 'production',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: [
          'babel-loader',
          {
            options: {
              eslintPath: require.resolve('eslint'),
            },
            loader: require.resolve('eslint-loader'),
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts',
          useRelativePath: true,
        },
      },
      {
        test: /\.css$/,
        use: cssLoaders(),
      },
    ],
  },

  plugins: [
    new MiniCSSExtractPlugin({
      filename: '[name].css',
    }),
  ],
}
