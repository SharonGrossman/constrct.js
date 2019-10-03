import { resolve } from 'path';
import 'dotenv-extended/config';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { HotModuleReplacementPlugin, DefinePlugin } from 'webpack';
import CompressionPlugin from 'compression-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

export default env => {
  const mode = env === 'production' ? 'production' : 'development';

  return {
    mode,
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html'
      }),
      new HotModuleReplacementPlugin(),
      new CompressionPlugin(),
      new DefinePlugin({
        USER_API_URL: JSON.stringify(process.env.USER_API_URL),
        AUTH_API_URL: JSON.stringify(process.env.AUTH_API_URL)
      })
    ],
    entry: {
      main: ['react-hot-loader/patch', './index.js'],
      vendor: ['lodash', 'react', '@material-ui/core']
    },
    output: {
      path: resolve(__dirname, './dist'),
      filename: './[name].[hash].js',
      chunkFilename: './[name].[chunkhash].js'
    },
    optimization: {
      minimizer: [new UglifyJsPlugin()]
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.js$/,
          use: ['babel-loader'],
          exclude: /node_modules/
        },
        {
          // eslint-disable-next-line unicorn/no-unsafe-regex
          test: /\.(jp(e)?g|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '/[hash].[ext]'
              }
            }
          ]
        }
      ]
    },
    devServer: {
      port: process.env.WEBPACK_PORT,
      inline: true,
      historyApiFallback: true,
      hot: true,
      proxy: {
        '/api/*': {
          target: `${process.env.API_URL}`
        },
        '/auth/*': {
          target: `${process.env.API_URL}`
        },
        '/ws/*': {
          target: `${process.env.API_URL}`
        }
      }
    }
  };
};
