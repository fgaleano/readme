module.exports = {
  verbose: true,
  testRegex: "\\.test\\.js$",
  setupFilesAfterEnv: [
    "jest-dom/extend-expect",
    "react-testing-library/cleanup-after-each"
  ]
};
