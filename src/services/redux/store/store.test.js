import { createStore } from './store';

describe('Redux store', () => {
    it('exports a createStore function', () => {
        expect(typeof createStore).toBe('function');
    });
});
