const presets = [
  ["@babel/env", {"modules": false}],
  "@babel/preset-react"
];

const plugins = ['@babel/plugin-transform-class-properties']

module.exports = { presets, plugins };