const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Custom template using Handlebars',
            template: './src/index.html'
        })
    ]
};