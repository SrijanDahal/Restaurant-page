const path = require('path');
const htmlwebpackplugin = require('html-webpack-plugin');
const loader = require('css-loader');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },

    plugins: [
        new htmlwebpackplugin({
            template: "./src/template.html"
        }),
    ],

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};