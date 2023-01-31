const reverseString = require('./reverseString.js')
test('fithamlak is kalmahtif', () => {
  expect(() => reverseString('fithamlak').toBe('kalmahtif'));
});

test('A is not String type it is A character', () => {
    expect(() => stringLength(A)).toThrow();
});