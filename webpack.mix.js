const mix = require("laravel-mix");
const path = require("path");
const tailwindcss = require("tailwindcss");
require("laravel-mix-purgecss");
const MomentLocalesPlugin = require("moment-locales-webpack-plugin");

mix.js("resources/js/app.js", "public/js")
    .sass("resources/sass/app.scss", "public/css")
    .options({
        processCssUrls: false,
        postCss: [tailwindcss("./tailwind.config.js")]
    })
    .webpackConfig({
        output: { chunkFilename: "js/[name].js?id=[chunkhash]" },
        resolve: {
            alias: {
                vue$: "vue/dist/vue.runtime.esm.js",
                "@": path.resolve("resources/js")
            }
        },
        plugins: [new MomentLocalesPlugin()]
    })
    .babelConfig({
        plugins: ["@babel/plugin-syntax-dynamic-import"]
    })
    .purgeCss()
    .version()
    .sourceMaps(true);
