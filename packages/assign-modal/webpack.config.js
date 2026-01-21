const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

let webpackConfig = {
  entry: './test/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: '/',
    clean: true, // webpack 5 内置清理功能
  },
  mode: 'development',
  devtool: 'eval-source-map', // 更新为 webpack 5 推荐的 source map 类型
  devServer: {
    port: 7979,
    open: true,
    host: 'localhost',
    hot: true,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, './'),
      publicPath: '/',
    },
  },
  cache: {
    type: 'filesystem', // webpack 5 持久化缓存
    buildDependencies: {
      config: [__filename],
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env'], '@babel/preset-react'],
              plugins: [
                ['@babel/plugin-proposal-decorators', { legacy: true }],
                ['@babel/plugin-proposal-class-properties', { loose: true }],
                [
                  'import',
                  {
                    libraryName: 'antd',
                    libraryDirectory: 'es',
                    style: true,
                  },
                ],
                [
                  'import',
                  {
                    libraryName: 'tntd',
                    libraryDirectory: 'es',
                  },
                  'tntd',
                ],
                '@babel/plugin-transform-runtime',
              ],
            },
          },
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env'], '@babel/preset-react', '@babel/preset-typescript'],
              plugins: [
                ['@babel/plugin-proposal-decorators', { legacy: true }],
                ['@babel/plugin-proposal-class-properties', { loose: true }],
                [
                  'import',
                  {
                    libraryName: 'antd',
                    libraryDirectory: 'es',
                    style: true,
                  },
                ],
                [
                  'import',
                  {
                    libraryName: 'tntd',
                    libraryDirectory: 'es',
                  },
                  'tntd',
                ],
                '@babel/plugin-transform-runtime',
              ],
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: false,
            },
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
                modifyVars: {
                  hack: 'true; @import "~tntd/themes/default/variables.less";',
                },
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        type: 'asset', // webpack 5 内置的资源模块
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 10kb
          },
        },
        generator: {
          filename: 'images/[hash][ext][query]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
  performance: {
    hints: false, // 关闭性能提示
  },
};

module.exports = webpackConfig;
