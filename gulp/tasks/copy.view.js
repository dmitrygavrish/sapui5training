'use strict';

module.exports = function() {
  $.gulp.task('copy.view', function() {
    return $.gulp.src(['./source/view/*.xml', './source/view/fragments/*.xml'], { since: $.gulp.lastRun('copy.view') })
      .pipe($.gulp.dest($.config.root + '/view'));
  });
};