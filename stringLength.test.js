const stringLength = require('./stringLength.js')
test('Input is String type and its length is 9', () => {
    expect(() => stringLength('fithamlak').toBe(9));
  });

test('Input is not String type', () => {
    expect(() => stringLength(12)).toThrow();
  });
  
  test('length of string is 0', () => {
    expect(() => stringLength('')).toThrow();
  });
  
  test('length of string is 12', () => {
    expect(() => stringLength('987654321237')).toThrow();
  });