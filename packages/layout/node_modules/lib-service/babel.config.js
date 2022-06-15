/**
 * @file babel 配置文件
 * @author zhangyou
 */

const presets = [
    '@babel/env',
    'minify'
];

const plugins = [
    // [
    //     '@babel/plugin-proposal-class-properties',
    //     {
    //         loose: true
    //     }
    // ],
    [
        '@babel/plugin-proposal-optional-chaining',
        {
            loose: true
        }
    ]
];

module.exports = {presets, plugins};
