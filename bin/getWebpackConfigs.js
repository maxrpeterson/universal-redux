const path = require('path');

const userWebpackConfigPath = path.join(process.cwd(), './config/webpack.config.js');

const defaultWebpackConfigs = require('../config/webpack.config.js');

function getWebpackConfig() {
  let config;
  try {
    config = require(path.resolve(userWebpackConfigPath));
    console.log(`Loaded project level webpack config from ${userConfigPath}`);
    return config;
  } catch (err) {
    console.warn('No webpack config file found, using defaults.');
  }
  if (!config) config = defaultWebpackConfigs;
  return config;
}

module.exports = getWebpackConfig();
