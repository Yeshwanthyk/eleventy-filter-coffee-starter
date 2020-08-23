const { parallel, watch } = require('gulp');

// Pull in each task
const fonts = require('./gulp-tasks/fonts.js');
const sass = require('./gulp-tasks/sass.js');
const images = require('./gulp-tasks/images.js');

// Set each directory and contents that we want to watch and
// assign the relevant task. `ignoreInitial` set to true will
// prevent the task being run when we run `gulp watch`, but it
// will run when a file changes.
const watcher = () => {
  watch('./src/scss/**/*.scss', { ignoreInitial: true }, sass);
  watch('./src/images/**/*', { ignoreInitial: true }, images);
};

// The default (if someone just runs `gulp`) is to run each task in parrallel
exports.default = parallel(fonts, images, sass);

// This is our watcher task that instructs gulp to watch directories and
// act accordingly
exports.watch = watcher;
