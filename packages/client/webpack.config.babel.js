import { resolve } from 'path';
import 'dotenv-extended/config';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { HotModuleReplacementPlugin } from 'webpack';

export default env => {
  const mode = env === 'production' ? 'production' : 'development';

  return {
    mode,
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html'
      }),
      new HotModuleReplacementPlugin()
    ],
    entry: {
      main: './index.js',
      vendor: ['lodash', 'react', '@material-ui/core']
    },
    output: {
      path: resolve(__dirname, './dist/src'),
      filename: './[name].[hash].js',
      chunkFilename: './[name].[chunkhash].js'
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
          target: `http://localhost:${process.env.API_PORT}`
        },
        '/auth/*': {
          target: `http://localhost:${process.env.API_PORT}`
        },
        '/ws/*': {
          target: `http://localhost:${process.env.API_PORT}`
        }
      }
    }
  };
};
