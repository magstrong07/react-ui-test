module.exports = (api) => {
  const mode = process.env.NODE_ENV ?? 'production';

  // This caches the Babel config by environment.
  api.cache.using(() => mode);

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            browsers: ['last 4 versions'],
          },
          useBuiltIns: 'usage',
          corejs: { version: 3, proposals: true },
          modules: 'auto',
        },
      ],
      '@babel/preset-react',
    ],
    plugins: [
      ['@babel/plugin-transform-runtime', { corejs: 3 }],
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-export-namespace-from',
      '@babel/plugin-proposal-throw-expressions',
      '@babel/proposal-object-rest-spread',
      'babel-plugin-styled-components',
      // Applies the react-refresh Babel plugin on non-production modes only
      mode !== 'production' && 'react-refresh/babel',
      [
        '@babel/plugin-transform-modules-commonjs',
        {
          allowTopLevelThis: true,
        },
      ],
    ].filter(Boolean),
  };
};
