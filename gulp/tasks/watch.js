'use strict';

module.exports = function() {
  $.gulp.task('watch', function() {
    $.gulp.watch('./source/component/**/*.js', $.gulp.series('js.process'));
    $.gulp.watch('./source/styles/**/*.scss', $.gulp.series('sass'));
    $.gulp.watch('./source/templates/**/*.pug', $.gulp.series('pug'));
    $.gulp.watch('./source/assets/view/**/*.*', $.gulp.series('copy.view'));
    $.gulp.watch('./source/assets/**/*.*', $.gulp.series('copy.assets'));
    $.gulp.watch('./source/mockServer/**/*.*', $.gulp.series('copy.mock'));
  });
};
