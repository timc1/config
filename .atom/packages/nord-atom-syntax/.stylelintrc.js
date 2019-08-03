/*
 * Copyright (C) 2016-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2016-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Atom Syntax
 * Repository: https://github.com/arcticicestudio/nord-atom-syntax
 * License:    MIT
 * References:
 *   https://stylelint.io
 *   https://stylelint.io/user-guide/rules
 *   https://github.com/stylelint/stylelint-config-standard
 */

module.exports = {
  "extends": "stylelint-config-standard",
  "rules": {
    "color-hex-case": "upper",
    "comment-empty-line-before": null,
    "selector-type-no-unknown": [true, {
      "ignoreTypes": ["/^atom-/"]
    }],
    "selector-pseudo-element-colon-notation": "single"
  }
}
