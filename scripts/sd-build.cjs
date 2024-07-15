/* eslint-disable @typescript-eslint/no-var-requires */

const _ = require('lodash');
const StyleDictionary = require('style-dictionary').extend({
  platforms: {
    css: {
      buildPath: 'src/styles/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
          options: {
            outputReferences: true,
          },
        },
      ],
      transforms: [
        'attribute/cti',
        'name/cti/tokens-bruecke',
        'time/seconds',
        'content/icon',
        'size/rem',
        'color/css',
      ],
    },
  },
  source: ['tokens/**/*.tokens.json'],
});

StyleDictionary.registerTransform({
  name: 'name/cti/tokens-bruecke',
  type: 'name',
  transformer: (token) =>
    _.chain(token.path).drop().join('-').kebabCase().value(),
});

StyleDictionary.buildAllPlatforms();
