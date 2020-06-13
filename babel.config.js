module.exports = {
  presets: [
    "module:metro-react-native-babel-preset",
    "@emotion/babel-preset-css-prop",
    "@babel/preset-typescript",
  ],
  plugins: [
    "@babel/plugin-transform-runtime",
    ["@babel/plugin-proposal-decorators", { legacy: true }],
  ],
};
