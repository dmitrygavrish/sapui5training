'use strict';

module.exports = function() {
  $.gulp.task('copy.controller', function() {
    return $.gulp.src('./source/controller/**/*.*', { since: $.gulp.lastRun('copy.controller') })
      .pipe($.gulp.dest($.config.root + '/controller'));
  });
};