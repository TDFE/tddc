const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 新增

module.exports = {
  mode: 'production',

  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'umd'),
    filename: 'tree-view.min.js',
    library: 'treeView',
    libraryTarget: 'umd',
    // 兼容 Node.js / Browser 环境的全局对象
    globalObject: 'typeof self !== "undefined" ? self : this',
    // 避免 UMD 构建在 webpack 5 中缺少 jsonpFunction 导致冲突
    umdNamedDefine: true,
  },

  // react / react-dom / antd 由宿主环境提供，不打入产物
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM',
    },
    antd: {
      commonjs: 'antd',
      commonjs2: 'antd',
      amd: 'antd',
      root: 'antd',
    },
    tntd: {
      commonjs: 'tntd',
      commonjs2: 'tntd',
      amd: 'tntd',
      root: 'tntd',
    },
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  module: {
    rules: [
      // TypeScript / JavaScript
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: '> 0.5%, not dead', modules: false }],
              '@babel/preset-react',
            ],
            plugins: [
              // antd 按需加载（CSS 由 less-loader 处理）
              ['import', { libraryName: 'antd', libraryDirectory: 'lib', style: true }, 'antd'],
              ['import', { libraryName: 'tntd', libraryDirectory: 'es' }, 'tntd'],
              // lodash 按需加载
              'lodash',
            ],
          },
        },
      },

      // Less（antd 主题 + 组件自身样式）
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
                modules: true,
                localIdentName: '[name]__[local]___[hash:base64:5]', // 修正笔误
                modifyVars: {
                  hack: 'true; @import "~tntd/themes/default/variables.less";',
                },
              },
            },
          },
        ],
      },

      // 普通 CSS
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },

      // 图片 / 字体等静态资源：全部转 base64 内联到 JS
      {
        test: /\.(png|jpg|gif|svg|woff2?|ttf|eot)$/,
        type: 'asset/inline',
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'tree-view.min.css',
    }),
  ],

  optimization: {
    minimize: true,
    // 不拆分 chunk，输出单一文件
    splitChunks: false,
    runtimeChunk: false,
  },
};
