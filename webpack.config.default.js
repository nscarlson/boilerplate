import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';

const config = {
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader?cacheDirectory'
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!less-loader' })
            }
        ]
    },
    output: {
        filename: '[name].js',
        libraryTarget: 'umd',
        path: './',
        sourceMapFilename: '[file].map'
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new HtmlWebpackPlugin(),
        new webpack.IgnorePlugin(/react\/addons/),
        new webpack.IgnorePlugin(/react\/lib\/ReactContext/),
        new webpack.IgnorePlugin(/react\/lib\/ExecutionEnvironment/),
    ],
    resolve: {
        extensions: ['.js', '.less'],
        modules: [
            'node_modules',
            path.resolve(__dirname, 'src')
        ]
    }
};

export default config;
