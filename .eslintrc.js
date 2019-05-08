module.exports = {
  'env': {
    'browser': true,
    'es6': true
  },
  'parser': '@typescript-eslint/parser',
  'extends': ['standard', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'rules': {
    "comma-dangle": ["error", "always-multiline"],
    "@typescript-eslint/type-annotation-spacing": ["error", { "before": false, "after": true, overrides: { arrow: { before: true, after: true }} }],
    "@typescript-eslint/ban-types": "error",
    "@typescript-eslint/prefer-interface": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/member-delimiter-style": ["error", {
      "multiline": {
          "delimiter": "comma",
          "requireLast": true
      },
      "singleline": {
          "delimiter": "comma",
          "requireLast": false
      }
    }]
  }
}
