const browserify = require('@cypress/browserify-preprocessor');
const cucumber = require('cypress-cucumber-preprocessor').default;
const resolve = require('resolve');

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {

  const options = {
    ...browserify.defaultOptions,
    typescript: require.resolve("typescript"),
  };

  on('file:preprocessor', cucumber(options));
  require('cypress-mochawesome-reporter/plugin')(on);
};
