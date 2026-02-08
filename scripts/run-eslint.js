#!/usr/bin/env node
const path = require('path');
const { ESLint } = require('eslint');

(async () => {
  try {
    const eslint = new ESLint({
      cwd: process.cwd(),
      overrideConfig: {
        parser: require.resolve('@typescript-eslint/parser'),
        parserOptions: {
          ecmaVersion: 2024,
          sourceType: 'module',
          project: './tsconfig.json',
        },
        plugins: {
          '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
        },
        rules: {
          '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
          'no-console': 'warn'
        },
      },
    });

    const results = await eslint.lintFiles(['src/**/*.ts', 'src/**/*.tsx']);
    const formatter = await eslint.loadFormatter('stylish');
    const resultText = formatter.format(results);
    if (resultText) console.log(resultText);
    const errorCount = results.reduce((s, r) => s + r.errorCount, 0);
    process.exit(errorCount > 0 ? 1 : 0);
  } catch (err) {
    console.error('ESLint run error:', err);
    process.exit(2);
  }
})();
