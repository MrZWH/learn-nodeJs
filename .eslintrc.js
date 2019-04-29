module.exports = {
  "extends": ["eslint:recommended"],// 用推荐配置
  "rules": {
    "no-console": ["error", {
      "allow": ["warn", "error", "info"]
    }]
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "script"
  },
  "globals": {
    // "window": true
  },
  "env": {
    "browser": false,
    "node": true,
    "es6": true,
    "mocha": true
  }
};
