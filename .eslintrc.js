module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    semi: ['error', 'always'],
    'prettier/prettier': [
      'error',
      {
        quoteProps: 'as-needed',
        bracketSpacing: true,
      },
    ],
  },
};
