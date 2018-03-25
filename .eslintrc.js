module.exports = {
  extends: ["react-app", "airbnb"],
  plugins: ["react", "jsx-a11y", "import"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "jsx-a11y/href-no-hash": "off",
     "jsx-a11y/anchor-is-valid": [ "error", {
      "components": [ "Link" ],
      "specialLink": [ "hrefLeft", "hrefRight" ],
      "aspects": [ "noHref", "invalidHref", "preferButton" ]
    }],
    semi: ["error", "never"],
    indent: 2,
    "arrow-parens": ["error", "as-needed"],
    "no-underscore-dangle": ["error", { allow: ["_links", "_embedded"] }],
    'comma-dangle': [
      'error',
      {
        functions: 'ignore',
        objects: 'always-multiline',
        arrays: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
      },
    ],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    'react/jsx-no-bind': ['warn', {}],
    'react/no-did-mount-set-state': 'off',
    // Ref: https://github.com/airbnb/javascript/issues/684#issuecomment-172379370
    'generator-star-spacing': 'off',
    // Rule is broken in current version of ESLint: https://i.imgur.com/TvRxUcs.png
    // TODO: Upgrade ESLint and re-enable this rule
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
      node: {
        extensions: ['.js']
      },
    }
  },
}
