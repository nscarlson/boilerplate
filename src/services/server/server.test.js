import request from 'supertest';

import { APP_PORT } from 'services/constants';

import app, { init } from './server';

describe('server', () => {
    describe('default', () => {
        let req;

        beforeEach(() => {
            req = request(app);
        });

        describe('GET /fake', () => {
            let get;

            beforeEach(() => {
                get = req.get('/');
            });

            it('has the correct status code', () => get.expect(200));
        });
    });

    describe('init()', () => {
        it(`inits the server on port ${APP_PORT}`, () => {
            jest.spyOn(app, 'listen').mockImplementation((port, cb) => cb());
            jest.spyOn(console, 'log').mockImplementation(() => {});

            init();

            expect(app.listen).toHaveBeenCalledWith(APP_PORT, expect.anything());
        });
    });
});
