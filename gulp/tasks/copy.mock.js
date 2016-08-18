'use strict';

module.exports = function() {
  $.gulp.task('copy.mock', function() {
    return $.gulp.src('./source/mockServer/**/*.*', { since: $.gulp.lastRun('copy.mock') })
      .pipe($.gulp.dest($.config.root));
  });
};
