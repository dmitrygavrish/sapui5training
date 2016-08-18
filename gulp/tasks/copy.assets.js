'use strict';

module.exports = function() {
  $.gulp.task('copy.assets', function() {
    const srcArr = [
      './source/assets/component/*.js',
      './source/assets/images/*.*',
      './source/assets/json/*.json',
      './source/assets/**/*.*',
      '!./source/assets/view/**/*.*'
    ];

    return $.gulp.src(srcArr, { since: $.gulp.lastRun('copy.assets') })
      .pipe($.gulp.dest($.config.root));
  });
};