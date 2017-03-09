jest.mock('react-dom');
jest.mock('react-router');

import routes from 'services/routes';

import { init } from './client';

describe('client', () => {
    describe('init()', () => {
        let history, match, render;

        beforeEach(() => {
            const router = require('react-router');
            history = router.browserHistory;
            match = router.match;

            render = require('react-dom').render;

            render.mockImplementation((element, container, callback) => {
                callback();
            });
        });

        it('matches the routes', () => {
            init();

            expect(match).toHaveBeenCalledWith({ history, routes }, expect.anything());
        });

        it('renders the app', () => {
            const renderProps = {
                test: true
            };

            jest.spyOn(document, 'getElementById').mockImplementation(() => null);

            match.mockImplementation((options, cb) => {
                cb(undefined, undefined, renderProps);
            });

            init();

            expect(render).toHaveBeenCalledWith(expect.anything(), null, expect.anything());
            expect(document.getElementById).toHaveBeenCalledWith('app');
            expect(document.getElementById).toHaveBeenCalledWith('initial-state');
        });

        it('removes the initial-state container if it exists', () => {
            const renderProps = {
                test: true
            };

            const initialState = {
                parentElement: {
                    removeChild: jest.fn()
                }
            };

            jest.spyOn(document, 'getElementById').mockImplementation(() => initialState);

            match.mockImplementation((options, cb) => {
                cb(undefined, undefined, renderProps);
            });

            init();

            expect(initialState.parentElement.removeChild).toHaveBeenCalledWith(initialState);
        });
    });
});
