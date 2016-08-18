'use strict';

module.exports = function() {
  $.gulp.task('copy.view', function() {
    return $.gulp.src(['./source/assets/view/*.xml', './source/assets/view/fragments/*.xml'], { since: $.gulp.lastRun('copy.view') })
      .pipe($.gulp.dest($.config.root + '/view'));
  });
};