import Html from './Html';
import index from './index';

describe('<Html /> index', () => {
    it('exports <Html />', () => {
        expect(index).toBe(Html);
    });
});
