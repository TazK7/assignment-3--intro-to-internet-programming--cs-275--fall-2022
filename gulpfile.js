const { src, dest, series, watch } = require(`gulp`),
    htmlCompressor = require(`gulp-htmlmin`),
    cssCompressor = require(`gulp-clean-css`),
    jsCompressor = require(`gulp-uglify`),
    jsLinter = require(`gulp-eslint`),
    babel = require(`gulp-babel`),
    browserSync = require(`browser-sync`),
    reload = browserSync.reload;

let browserChoice = `default`;

let serve = () =>
    browserSync({
        notify: true,
        reloadDelay: 50,
        browser: browserChoice,
        server: {
            baseDir: [
                `temp`,
                `./`
            ]
    }
});

async function chrome () {
    browserChoice = `chrome`;
}


let validateCSS = () => {
    return src([
        `dev/css/*.css`,
        `dev/css/**/*.css`])
        .pipe(cssCompressor(undefined));
};

let validateJS = () => {
    return src([
        `dev/js/*.js`,
        `dev/js/**/*.js`])
        .pipe(jsLinter())
        .pipe(jsLinter.formatEach(`compact`));
}

let compressHTML = () => {
    return src([`dev/html/*.html`,`dev/html/**/*.html`])
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`prod/css`));
}

let compressCSS = () => {
    return src([`dev/css/*.css`,`dev/css/**/*.css`])
        .pipe(cssCompressor({collapseWhitespace: true}))
        .pipe(dest(`prod/css`));
}

let compressJS = () => {
    return src(`dev/js/app.js`)
    .pipe(babel())
    .pipe(jsCompressor())
    .pipe(dest(`prod`));
}

let transpileJSForDev = () => {
    return src(`dev/scripts/*.js`)
        .pipe(babel())
        .pipe(dest(`temp/scripts`));
}

let transpileJSForProd = () => {
    return src(`dev/scripts/*.js`)
        .pipe(babel())
        .pipe(jsCompressor())
        .pipe(dest(`prod/scripts`));
};

    watch(`*.html`).on(`change`, reload);
    watch(`styles/*.css`, validateCSS).on(`change`, reload);
    watch(`js/*.js`, series(validateJS, transpileJSForDev)).on(`change`, reload);

    // watch(`dev/html/*.html`, validateHTML).on(`change`, reload);
    // watch(`dev/css/*.css`, validateCSS).on(`change`, reload);
    // watch(`dev/js/*.js`, series(validateJS, transpileJSForDev)).on(`change`, reload);

exports.validateCSS = validateCSS;
exports.validateJS = validateJS;
exports.compressHTML = compressHTML;
exports.compressCSS = compressCSS;
exports.compressJS = compressJS;
exports.transpileJSForDev = transpileJSForDev;
exports.transpileJSForProd = transpileJSForProd;
exports.chrome = series(serve, chrome);
exports.serve = series(
    validateCSS,
    validateJS,
    transpileJSForDev,
    serve
);
exports.build = series(
    compressHTML,
    compressCSS,
    compressJS,
    transpileJSForProd
)