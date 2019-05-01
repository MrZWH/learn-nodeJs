const presets = [
  ["@babel/env", {"modules": false}],
  "@babel/preset-react"
];

const plugins = ['@babel/plugin-transform-object-assign']

module.exports = { presets, plugins };