const webpack = require('webpack');
const path = require('path');

// 共享的基础配置
const baseConfig = {
  mode: 'production',
  devtool: false,
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    antd: 'antd',
    tntd: 'tntd',
    'universal-cookie': 'universal-cookie',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
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
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024,
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
};

// ES Module 版本
const esConfig = {
  ...baseConfig,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'es'),
    filename: 'index.js',
    library: {
      type: 'module',
    },
    environment: {
      module: true,
    },
  },
  experiments: {
    outputModule: true,
  },
  module: {
    ...baseConfig.module,
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { modules: false }], '@babel/preset-react'],
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
            ],
          },
        },
      },
      ...baseConfig.module.rules.slice(1),
    ],
  },
};

// CommonJS 版本
const libConfig = {
  ...baseConfig,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    library: {
      type: 'commonjs2',
    },
  },
  module: {
    ...baseConfig.module,
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { modules: 'cjs' }], '@babel/preset-react'],
            plugins: [
              ['@babel/plugin-proposal-decorators', { legacy: true }],
              ['@babel/plugin-proposal-class-properties', { loose: true }],
              [
                'import',
                {
                  libraryName: 'antd',
                  libraryDirectory: 'lib',
                  style: true,
                },
              ],
              [
                'import',
                {
                  libraryName: 'tntd',
                  libraryDirectory: 'lib',
                },
                'tntd',
              ],
            ],
          },
        },
      },
      ...baseConfig.module.rules.slice(1),
    ],
  },
};

module.exports = [esConfig, libConfig];
