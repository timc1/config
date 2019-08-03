/*
 * Copyright (C) 2016-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2016-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Atom Syntax
 * Repository: https://github.com/arcticicestudio/nord-atom-syntax
 * License:    MIT
 * References:
 *   http://eslint.org/docs/rules
 *   http://eslint.org/docs/user-guide/configuring
 *   http://eslint.org/docs/user-guide/configuring#using-configuration-files
 *   http://eslint.org/docs/user-guide/configuring#specifying-environments
 *   http://eslint.org/docs/user-guide/configuring.html#specifying-globals
 */

module.exports = {
  "env": {
    "node": true,
    "es6": true,
    "browser": true,
    "jasmine": true,
    "atomtest": true
  },
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 6,
    "ecmaFeatures": {}
  },
  "plugins": [],
  "extends": [
    "eslint:recommended"
  ],
  "globals": {
    "atom": true
  },
  "rules": {
    // Style Guide
    "array-bracket-spacing": ["error", "never"],
    "comma-dangle": ["error", "never"],
    "curly":["error", "all"],
    "func-call-spacing": ["error", "never"],
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "no-duplicate-imports": "error",
    "no-floating-decimal": "error",
    "no-tabs": "error",
    "no-trailing-spaces": ["error", {
      "skipBlankLines": false
    }],
    "no-var": "error",
    "no-whitespace-before-property": "error",
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    // Error Prevention
    "no-cond-assign": ["error", "always"],
    "no-console": "off",
    // Code Performance
    "global-require": "warn",
    // Documentation
    "require-jsdoc": ["warn", {
      "require": {
        "FunctionDeclaration": true,
        "MethodDefinition": false,
        "ClassDeclaration": true,
        "ArrowFunctionExpression": false
      }
    }],
    "valid-jsdoc": ["error", {
      "prefer": {
        "arg": "param",
        "argument": "param",
        "class": "constructor",
        "virtual": "abstract"
      },
      "requireParamDescription": true,
      "requireReturnDescription": true
    }]
  }
}
