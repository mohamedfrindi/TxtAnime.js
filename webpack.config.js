const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')




const mode_development = {
        entry: './src/index.js',
        mode : 'development',
        devtool: false,

        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'TxtAnime.js',
        },

        module: {
            rules: [
                {
                    test: /\.s[ac]ss$/i,
                    use: ["style-loader","css-loader","sass-loader",]
                }
            ]
        },
}

const mode_production = {
        entry: './src/index.js',
        mode : 'development',
        devtool: false,

        output: {
                path: path.resolve(__dirname, 'dist'),
                filename: 'TxtAnime-min.js',
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
                template: 'src/index.html'
            }),
            new BrowserSyncPlugin({
                host: 'localhost',
                port: 7070,
                server: { baseDir: ['dist'] }
            })
        ],
} 


module.exports = [
    mode_development ,
    mode_production
];