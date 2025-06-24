const gulp = require('gulp');

gulp.task('task', async done => {
    await console.log('Hola Geek');
    done();
});


module.exports = gulp