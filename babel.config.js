const BABEL_ENV = process.env.BABEL_ENV;
const building = BABEL_ENV !== undefined && BABEL_ENV !== "cjs";

module.exports = function(api) {
  api.cache(true);

  const presets = [
    "@babel/preset-react",
    [
      "@babel/preset-env",
      {
        loose: true,
        modules: building ? false : "commonjs",
        targets: {
          node: "current"
        }
      }
    ]
  ];

  const plugins = [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread"
  ];

  if (BABEL_ENV === "umd") {
    plugins.push("@babel/plugin-external-helpers");
  }

  return {
    presets,
    plugins
  };
};
