import reducers from './reducers';

describe('reducers', () => {
    describe('handles the TOGGLE action', () => {
        it('sets the correct default value', () => {
            expect(reducers(undefined, { type: 'FAKE' })).toEqual({ toggle: true });
        });

        it('sets the toggle to false when it is true', () => {
            expect(reducers({ toggle: true }, { type: 'TOGGLE' })).toEqual({ toggle: false });
        });

        it('sets the toggle to true when it is false', () => {
            expect(reducers({ toggle: false }, { type: 'TOGGLE' })).toEqual({ toggle: true });
        });
    });
});
