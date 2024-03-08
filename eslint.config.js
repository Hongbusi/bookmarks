// eslint.config.js
const antfu = require('@antfu/eslint-config').default

module.exports = antfu({
  react: true,
  rules: {
    'ts/no-use-before-define': 'off',
    'node/prefer-global/process': 'off',
    'react/prop-types': 'off',
    'react-refresh/only-export-components': 'off',
  },
})
