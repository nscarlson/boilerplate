const __SERVER__ = typeof window === 'undefined';
const __CLIENT__ = !__SERVER__;

const APP_NAME = 'Boilerplate';
const APP_PORT = 8888;

export {
    __CLIENT__,
    __SERVER__,

    APP_NAME,
    APP_PORT
};
