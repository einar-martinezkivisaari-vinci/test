import { divideAndConquer } from '../src/attia';

test('divide conquer 3, 4 = 3/28', () => {
    expect(divideAndConquer(3, 4)).toBe(3/28);
});