const filters = require('./utils/filters.js');

// Transforms
const htmlMinTransform = require('./src/transforms/html-min-transform.js');

// Create a helpful production flag
const isProduction = process.env.NODE_ENV === 'production';

module.exports = (config) => {
  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  config.setUseGitIgnore(false);

  // Only minify HTML if we are in production because it slows builds _right_ down
  if (isProduction) {
    config.addTransform('htmlmin', htmlMinTransform);
  }

  // Filters
  Object.keys(filters).forEach((filterName) => {
    config.addFilter(filterName, filters[filterName]);
  });

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
