const path = require("path");
module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.example.js?$/,
    loaders: [require.resolve("@storybook/addon-storysource/loader")],
    enforce: "pre"
  });
  return config;
};
