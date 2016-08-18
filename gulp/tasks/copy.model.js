'use strict';

module.exports = function() {
  $.gulp.task('copy.model', function() {
    return $.gulp.src('./source/model/**/*.*', { since: $.gulp.lastRun('copy.model') })
      .pipe($.gulp.dest($.config.root + '/model'));
  });
};