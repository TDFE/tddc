import { readdirSync } from 'fs';
import { join } from 'path';

const tailPkgs = readdirSync(join(__dirname, 'packages')).filter((pkg) => pkg.charAt(0) !== '.');

const type = process.env.BUILD_TYPE;

let config = {};

if (type === 'lib') {
  config = {
    cjs: { type: 'babel', lazy: true },
    esm: false,
    pkgs: [...tailPkgs],
    extraBabelPlugins: [
      ['babel-plugin-import', { libraryName: 'antd', style: true }, 'antd'],
      ['babel-plugin-import', { libraryName: 'tntd' }, 'tntd'],
    ],
  };
}

if (type === 'es') {
  config = {
    cjs: false,
    esm: {
      type: 'babel',
    },
    pkgs: [...tailPkgs],
    extraBabelPlugins: [
      ['babel-plugin-import', { libraryName: 'antd', libraryDirectory: 'es', style: true }, 'antd'],
      ['babel-plugin-import', { libraryName: 'tntd', libraryDirectory: 'es' }, 'tntd'],
      [require('./scripts/replaceLib')],
    ],
  };
}

export default config;
