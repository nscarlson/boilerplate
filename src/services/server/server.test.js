import request from 'supertest';

import app, { init } from './server';

describe('server', () => {
    describe('default', () => {
        let req;

        beforeEach(() => {
            req = request(app);
        });

        describe('GET /', () => {
            let get;

            beforeEach(() => {
                get = req.get('/');
            });

            it('has the correct status code', () => get.expect(200));

            it('has the correct body', () => get.expect('SUCCESS'));
        });
    });

    describe('init()', () => {
        it('inits the server on port 8888', () => {
            jest.spyOn(app, 'listen').mockImplementation((port, cb) => cb());
            jest.spyOn(console, 'log').mockImplementation(() => {});

            init();

            expect(app.listen).toHaveBeenCalledWith(8888, expect.anything());
        });
    });
});
