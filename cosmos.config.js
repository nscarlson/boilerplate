export default {
    componentPaths: [
        'src'
    ],
    ignore: [
        'Html.js',
        'index.js',
        /services/,
        /\.test\.js/,
    ],
    webpackConfigPath: 'webpack.config.client.js',
};
