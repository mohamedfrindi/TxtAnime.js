const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
    entry: './src/doc/index.js',
    mode : 'production',
    devtool: false,

    output: {
        path: path.resolve(__dirname, './'),
        filename: 'index.js',
        library: {
            name: 'TxtAnime',
            type: 'umd',
            export: 'default',
            umdNamedDefine: true,
        },
    },

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader","css-loader","sass-loader",]
            }
        ]
    },

    plugins : [
        new HtmlWebpackPlugin({
            template: 'src/doc/index.html'
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 8080,
            server: { baseDir: ['./'] }
        })
    ],
}