'use strict';

module.exports = function() {
  $.gulp.task('watch', function() {
    $.gulp.watch('./source/component/**/*.js', $.gulp.series('js.process'));
    $.gulp.watch('./source/styles/**/*.scss', $.gulp.series('sass'));
    $.gulp.watch('./source/templates/**/*.pug', $.gulp.series('pug'));
    $.gulp.watch('./source/images/**/*.*', $.gulp.series('copy.image'));
    $.gulp.watch('./source/view/**/*.*', $.gulp.series('copy.view'));
    $.gulp.watch('./source/controller/**/*.*', $.gulp.series('copy.controller'));
    $.gulp.watch('./source/i18n/**/*.*', $.gulp.series('copy.properties'));
    $.gulp.watch('./source/**/*.json', $.gulp.series('copy.json'));
    $.gulp.watch('./source/model/*.*', $.gulp.series('copy.model'));
    $.gulp.watch('./source/mockServer/**/*.*', $.gulp.series('copy.mock'));
  });
};
