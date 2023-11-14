module.exports = {
  root: true,
  extends: [
    "plugin:vue/essential",
    "plugin:prettier/recommended",
    "eslint:recommended",
  ],
  rules: {
    "func-names": 0,
    "no-shadow": [2, { allow: ["err", "req", "res", "collection"] }],
    "no-bitwise": "off",
  },
  parserOptions: {
    ecmaVersion: "latest",
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
};
