const memoize = require('../lib');

describe('Return a momized function', () => {
  test('should return same value with same referenced args', () => {
    function double(args) {
      return args.map(arg => arg * 2);
    }

    const memoizedDouble = memoize(double);
    const testsArgs = [1, 2, 3, 4];
    const doubledArray = memoizedDouble(testsArgs);
    testsArgs.push(5);
    const nextDoubledArray = memoizedDouble(testsArgs);
    expect(doubledArray).toEqual(nextDoubledArray);
  });
});
