const path = require('path');


const mode_development = {
        entry: './src/index.js',
        mode : 'development',
        devtool: false,

        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'TxtAnime.js',
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
}

const mode_production = {
        entry: './src/index.js',
        mode : 'production',
        devtool: false,

        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'TxtAnime-min.js',
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
} 


module.exports = [
    mode_development ,
    mode_production
];
