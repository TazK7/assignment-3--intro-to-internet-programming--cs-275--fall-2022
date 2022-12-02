const { src, dest, series, watch } = require(`gulp`),
    htmlCompressor = require(`gulp-htmlmin`),
    cssCompressor = require(`gulp-clean-css`),
    jsCompressor = require(`gulp-uglify`),
    cssValidator = require(`gulp-eslint`),
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
    return src(`styles/*.css`)
    .pipe(cssValidator())
    .pipe(cssValidator.formatEach(`compact`));
}

let validateJS = () => {
    return src([
        `js/main.js`])
        .pipe(jsLinter())
        .pipe(jsLinter.formatEach(`compact`));
}

let compressHTML = () => {
    return src([`*.html`])
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`prod/html`));
}

let compressCSS = () => {
    return src([`styles/*.css`])
        .pipe(cssCompressor({collapseWhitespace: true}))
        .pipe(dest(`prod/css`));
}

let compressJS = () => {
    return src(`js/main.js`)
    .pipe(babel())
    .pipe(jsCompressor())
    .pipe(dest(`prod/main.js`));
}

let transpileJSForDev = () => {
    return src(`js/main.js`)
        .pipe(babel())
        .pipe(dest(`prod/temp`));
}

let transpileJSForProd = () => {
    return src(`js/main.js`)
        .pipe(babel())
        .pipe(jsCompressor())
        .pipe(dest(`prod/scripts`));
};

    watch(`*.html`).on(`change`, reload);
    watch(`styles/*.css`, validateCSS).on(`change`, reload);
    watch(`js/main.js`, series(validateJS, transpileJSForDev)).on(`change`, reload);

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