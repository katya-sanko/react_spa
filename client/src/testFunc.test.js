const testFunc = require('./testFunc');

test('tests testFunc', () => {
    expect(testFunc(1, 2)).toBe(3);
});