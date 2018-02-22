const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModernizrWebpackPlugin = require('modernizr-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
    title: 'Template',
    template: '../public/index.html',
    filename: 'index.html',
    hash: true,
    inject: 'body'
});

const HotReloader = new webpack.HotModuleReplacementPlugin();

const modernizrConfig = {
    'options': [
        'setClasses'
    ],
    'feature-detects': [
        'input',
        'canvas',
        'css/resize'
    ],
    'htmlWebpackPlugin': htmlWebpackPlugin,
    'minify': {
        output: {
            comments: true,
            beautify: true
        }
    }
};

module.exports = {
    context: __dirname + '/src',
    entry: './index.js',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'], exclude: /node_modules/ },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
        ]
    },
    plugins: [
        htmlWebpackPlugin,
        HotReloader
    ]
}
