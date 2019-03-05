module.exports = {
  plugins: [
    require('postcss-partial-import'),
    require('postcss-apply'),
    require('postcss-preset-env')({ stage: 0 }),
    require('postcss-nested'),
    require("postcss-color-function"),
    // require('cssnano')({ preset: 'default' }),
  ],
};
