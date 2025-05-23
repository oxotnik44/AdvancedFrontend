const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (storybookConfig) => {
    const config = {
      ...storybookConfig,
      resolve: {
        ...storybookConfig.resolve,
        plugins: [
          ...(storybookConfig.resolve.plugins || []),
          new TsconfigPathsPlugin({
            configFile: path.resolve(__dirname, '../../tsconfig.json'),
          }),
        ],
      },
    };
    return config;
  },
};
