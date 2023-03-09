module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
      'antd',
    ],
    [
      'import',
      {
        libraryName: 'tntd',
        libraryDirectory: 'es',
      },
      'tntd',
    ],
    [
      '@babel/plugin-proposal-optional-chaining',
      {
        loose: true,
      },
    ],
  ],
};
