'use strict';

module.exports = function() {
  $.gulp.task('copy.properties', function() {
    return $.gulp.src('./source/i18n/**/*.*', { since: $.gulp.lastRun('copy.properties') })
      .pipe($.gulp.dest($.config.root + '/i18n'));
  });
};