import ExtractTextPlugin from 'extract-text-webpack-plugin';

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
        new ExtractTextPlugin('[name].css')
    ],
    resolve: {
        extensions: ['.js', '.less'],
        modules: [
            'node_modules',
            './src'
        ]
    }
};

const configs = [
    {
        ...config,
        entry: {
            'private/server': 'services/server',
        },
        externals: (context, request, callback) => {
            if (request.match(/^(\.{0,2})\//)) {
                // Absolute or relative path
                return callback();
            }

            try {
                // Attempt to resolve via Node
                require.resolve(request);
                callback(null, request);
            } catch (e) {
                // Fallback
                callback();
            }
        },
        target: 'node'
    },
    {
        ...config,
        entry: {
            'public/client': [
                'services/client',
                'services/client/index.less',
            ]
        }
    }
];

export default configs;
