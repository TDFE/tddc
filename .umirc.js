import { defineConfig } from 'dumi';
import { readdirSync } from 'fs';
import chalk from 'chalk';
import { join } from 'path';

const webpack = require('webpack');

const headPkgList = [];
const pkgList = readdirSync(join(__dirname, 'packages')).filter(
  (pkg) => pkg.charAt(0) !== '.' && !headPkgList.includes(pkg),
);

const alias = pkgList.reduce((pre, pkg) => {
  pre[`@tddc/${pkg}`] = join(__dirname, 'packages', pkg, 'src');
  return {
    ...pre,
  };
}, {});

console.log(`🌼 alias list \n${chalk.blue(Object.keys(alias).join('\n'))}`);

const tailPkgList = pkgList
  .map((path) => [join('packages', path, 'src'), join('packages', path, 'src', 'components')])
  .reduce((acc, val) => acc.concat(val), []);

export default defineConfig({
  title: 'tddc',
  favicon: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
  resolve: {
    includes: [...tailPkgList, 'docs'],
  },
  alias: alias,
  proxy:{
    '/bridgeApi': {
      target: 'https://tiangong.tcloud.tongdun.cn/',
      changeOrigin: true,
      pathRewrite: {}
    },
  },
  chainWebpack(memo){
    memo.plugin('ProvidePlugin').use(webpack.ProvidePlugin,[{
      React: 'react'
    }]);

    memo.plugin('DefinePlugin').use(webpack.DefinePlugin,[{
      'process.env':  JSON.stringify(process.env)
    }]);
  },
  metas: [
    {
      property: 'og:description',
      content: '🏆 让中后台开发更简单',
    }
  ],
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  navs: {
    'en-US': [
      null,
      {
        title: 'GitHub',
        path: 'https://github.com/MrXujiang/best-cps',
      },
    ],
    'zh-CN': [
      null,
      {
        title: 'GitHub',
        path: 'https://github.com/MrXujiang/best-cps',
      },
    ],
  },
  menus: {
    '/components': [
      {
        title: '架构设计',
        children: ['components.md'],
      },
      {
        title: '通用',
        children: pkgList,
      },
    ],
    '/en-US/components': [
      {
        title: 'Architecture Design',
        children: ['components.en-US.md'],
      },
      {
        title: 'General',
        children: pkgList,
      },
    ]
  }
});
