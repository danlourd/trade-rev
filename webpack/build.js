const mergeWith = require('lodash/mergeWith');
const isArray = require('lodash/isArray');

const { getLocalConfig } = require('./local');
const { getCommonConfig } = require('./common');
const { getDeployedConfig } = require('./deployed');
const { getUnitTestConfig, getPreLoaders } = require('./unitTest');

function mergeCustomizer(objValue, srcValue) {
  if (isArray(objValue)) {
    return objValue.concat(srcValue);
  }
}

function buildUnitTestConfig(basicConfig, options) {
  const mergedConfig = mergeWith(basicConfig, getUnitTestConfig(options), mergeCustomizer);

  if (!options.isDebug) {
    mergedConfig.module.rules.push(getPreLoaders(options));
  }

  return mergedConfig;
}

function buildConfig(options) {
  if (options.isUnitTest) {
    return buildUnitTestConfig(getCommonConfig(options), options);
  }

  const configToUse = options.isLocal ? getLocalConfig(options) : getDeployedConfig(options);

  return mergeWith(getCommonConfig(options), configToUse, mergeCustomizer);;
}

module.exports = {
  buildConfig,
  buildUnitTestConfig,
};
