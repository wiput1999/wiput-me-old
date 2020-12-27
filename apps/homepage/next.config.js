/* eslint-disable @typescript-eslint/no-var-requires */
const withNx = require('@nrwl/next/plugins/with-nx');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins(
  [
    [withNx]
  ],
)
