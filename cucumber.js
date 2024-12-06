module.exports = {
    default: {
      require: ['tests/steps/**/*.js'], // Path to your step definitions
      format: ['progress'],       // Report format
      paths: ['tests/features/**/*.feature'], // Path to feature files
      publishQuiet: true,         // Disable Cucumber analytics
    },
  };
  