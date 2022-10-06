const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");


// build umd files
const mode_development = {
    entry: "./src/index.js",
    mode: "development",
    devtool: false,

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "TxtAnime.js",
    },

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
};

const mode_production = {
    entry: "./src/index.js",
    mode: "production",
    devtool: false,

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "TxtAnime.min.js",
    },

    optimization: {
        minimizer: [
            new TerserPlugin({
                extractComments: false,
            }),
        ],
    },

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
}; 


// build modules / esm and commonJs
const type_module = {
    entry: "./src/index.js",
    mode: "development",
    devtool: false,
    experiments: {
        outputModule: true,
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "TxtAnime.esm.js",
        library: {
            type: "module",
        },
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
};

const type_common = {
    entry: "./src/index.js",
    mode: "development",
    devtool: false,
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "TxtAnime.common.js",
        library: {
            type: "commonjs",
        },
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
};


// build site demo
const build_site = {
    entry: "./src/doc/index.js",
    // mode: "production",
    mode: "development",
    devtool: false,
    output: {
        path: path.resolve(__dirname, "./"),
        filename: "index.js",
        library: {
            type: "umd",
        },
    },

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "src/doc/index.html",
        }),
        new BrowserSyncPlugin({
            host: "localhost",
            port: 8080,
            server: { baseDir: ["./"] },
        }),
    ],
};



module.exports = [
    mode_development ,
    mode_production,
    type_module,
    type_common,
    build_site
];
