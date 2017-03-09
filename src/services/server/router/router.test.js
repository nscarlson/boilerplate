jest.mock('react-router');

import { createLocation } from 'history';

import routes from 'services/routes';

import router from './router';

describe('router', () => {
    let location, match, req, res;

    beforeEach(() => {
        req = {
            url: 'http://test/test?test=true'
        };

        res = {
            redirect: jest.fn(),
            send: jest.fn()
        };

        location = createLocation(req.url);

        const rr = require('react-router');
        match = rr.match;
    });

    it('matches the routes', () => {
        router(req, res);

        expect(match).toHaveBeenCalledWith({ location, routes }, expect.anything());
    });

    it('redirects if there is a redirectLocation', () => {
        const redirectLocation = {
            pathname: Math.random(),
            search: Math.random()
        };

        const { pathname, search } = redirectLocation;

        match.mockImplementation((options, cb) => {
            cb(null, redirectLocation, null);
        });

        router(req, res);

        expect(res.redirect).toHaveBeenCalledWith(301, pathname + search);
    });

    it('renders the html when all is well', () => {
        const renderProps = {};

        match.mockImplementation((options, cb) => {
            cb(null, null, renderProps);
        });

        router(req, res);

        expect(res.send.mock.calls[0][0]).toEqual(expect.stringContaining('<!DOCTYPE html>'));
    });
});
