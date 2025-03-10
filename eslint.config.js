import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'], // Check alleen JavaScript en JSX bestanden
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended, // Standaard JS-regels
  {
    ...pluginReact.configs.recommended,
    settings: {
      react: {
        version: 'detect', // Detecteer automatisch de React-versie
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off', // Niet nodig sinds React 17+
      'react/prop-types': 'off', // Uitschakelen als je PropTypes niet gebruikt
    },
  },
];
