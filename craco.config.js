// craco.config.js
const { whenProd } = require("@craco/craco");
const MangleCssClassPlugin = require("mangle-css-class-webpack-plugin");

const twRegEx =
    "(([a-zA-Z-:]*)[\\\\\\\\]*:)*([\\\\\\\\]*!)?tw-[a-zA-Z-]([a-zA-Z0-9-]*([\\\\\\\\]*(\\%|\\#|\\.|\\[|\\]))*)*";

module.exports = {
    style: {
        postOptions: {
            plugins: [require("tailwindcss"), require("autoprefixer")],
        },
    },
    webpack: {
        plugins: {
            add: [
                ...whenProd(
                    () => [
                        new MangleCssClassPlugin({
                            classNameRegExp: twRegEx,
                            log: true,
                        }),
                    ], []
                ),
            ],
        },
    },
};