module.exports = function () {
  return {
    files: [
      'node_modules/chai/chai.js',
      'lib/angular.js',
      'lib/angular-mocks.js',
      'index.js',
      'modules/**/*.js'
    ],
    tests: [
      'tests/*.js'
    ]
  };
};
