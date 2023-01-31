const stringLength = require('./stringLength.js')
test('Input is String type', () => {
    expect(() => stringLength('fithamlak').toBe(9));
  });

//   cehek if it is string

test('Input is not String type', () => {
    expect(() => stringLength(12)).toThrow();
  });