import { init } from './client';

describe('client', () => {
    describe('init()', () => {
        it('logs to the console', () => {
            jest.spyOn(console, 'log').mockImplementation(() => {});

            init();

            // eslint-disable-next-line no-console
            expect(console.log).toHaveBeenCalledWith('client init()');
        });
    });
});
