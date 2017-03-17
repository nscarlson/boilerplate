import config from './webpack.config.default';

const client = {
    ...config,
    name: 'client',
    entry: {
        'public/client': [
            'services/client',
            'services/client/index.less',
        ]
    }
};

export default client;
