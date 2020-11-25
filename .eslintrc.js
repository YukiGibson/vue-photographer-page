module.exports = {
  'root': true,
  'env': {
    'node': true,
    'es6': true,
  },
  'extends': [
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier/@typescript-eslint',
  ],
  'parserOptions': {
    ecmaVersion: 2020,
  },
  'rules': {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    'require-atomic-updates': 0,
  },
  'overrides': [
    {
      'files': ['**/__tests__/**/*'],
      'rules': {
        '@typescript-eslint/no-unsafe-member-access': 'off',
      },
    },
  ],
};
