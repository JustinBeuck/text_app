var gulp = require('gulp')
    , chalk = require('chalk')
    , nodemon = require('gulp-nodemon')
    , jshint = require('gulp-jshint')
    , stylish = require('jshint-stylish')
    , browserify = require('gulp-browserify')
    , reactify = require('reactify')
    , path = require('path')
    , less = require('gulp-less');

gulp.task('js', function() {
    console.log(chalk.green.bold("Building New Bundle..."))
    gulp.src('client/main.js')
    .pipe(browserify({
        insertGlobals: true,
        transform: ['reactify'],
        debug: !gulp.env.production
    }))
    .pipe(gulp.dest('./public/js'))

});

gulp.task('less', function () {
    gulp.src('./assets/styles.less')
    .pipe(less({
        paths: [ path.join(__dirname, 'less', 'includes')  ]

    }))
    .pipe(gulp.dest('./public/css'));

});

gulp.task('lint', function () {
    gulp.src('./*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
})

gulp.task('develop', function () {
    nodemon({
        script: 'app.js',
        ext: 'html js css less',
        nodeArgs: ['--harmony'],
        ignore: ['public/**']
    })
    .on('change', ['lint', 'less'])
    gulp.watch('./client/**', ['js']);

})
