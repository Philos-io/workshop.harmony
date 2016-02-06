module.exports = function () {
  return {
    files: [
      'modules/**/*.js',
      'index.js',
      'routes.js',
      'modules/**/**/*.js'
    ],
    tests: [
      'tests/*.spec.js'
    ]
  };
};
