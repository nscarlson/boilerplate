jest.mock('./client');

describe('client entry point', () => {
    it('inits the client', () => {
        const { init } = require('./client');

        require('./index');

        expect(init).toHaveBeenCalled();
    });
});
