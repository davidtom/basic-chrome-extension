import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';
import webpack from 'webpack';
import rimraf from 'rimraf';
import eslint from 'gulp-eslint';

const plugins = loadPlugins();

import popupWebpackConfig from './popup/webpack.config';
import backgroundWebpackConfig from './background/webpack.config';
import contentWebpackConfig from './content/webpack.config';

gulp.task('popup-js', ['clean'], (cb) => {
    webpack(popupWebpackConfig, (err, stats) => {
        if (err) throw new plugins.util.PluginError('webpack', err);

        plugins.util.log('[webpack]', stats.toString());

        cb();
    });
});

gulp.task('background-js', ['clean'], (cb) => {
    webpack(backgroundWebpackConfig, (err, stats) => {
        if (err) throw new plugins.util.PluginError('webpack', err);

        plugins.util.log('[webpack]', stats.toString());

        cb();
    });
});

gulp.task('content-js', ['clean'], (cb) => {
    webpack(contentWebpackConfig, (err, stats) => {
        if (err) throw new plugins.util.PluginError('webpack', err);

        plugins.util.log('[webpack]', stats.toString());

        cb();
    });
});

gulp.task('popup-html', ['clean'], () => {
    return gulp.src('popup/src/index.html')
        .pipe(plugins.rename('popup.html'))
        .pipe(gulp.dest('./build'));
});

gulp.task('copy-manifest', ['clean'], () => {
    return gulp.src('manifest.json')
        .pipe(gulp.dest('./build'));
});

gulp.task('clean', (cb) => {
    rimraf('./build', cb);
});

gulp.task('build', ['copy-manifest', 'popup-js', 'popup-html', 'background-js', 'content-js']);

// run default task after build
gulp.task('default', ['build']);

// run eslint after default task runs
gulp.task('lint', ['default'], () => {
    return gulp.src(['**/*.js','!node_modules/**', '!build/**'])
        .pipe(eslint())
        .pipe(eslint.format());
});

// run watch after lint task runs
gulp.task('watch', ['lint'], () => {
    gulp.watch('popup/**/*', ['build']);
    gulp.watch('content/**/*', ['build']);
    gulp.watch('background/**/*', ['build']);
});
