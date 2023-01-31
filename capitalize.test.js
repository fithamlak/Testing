const capitalize = require('./capitalize.js');

test('Input is not String type', () => {
    expect(() => stringLength(123)).toThrow();
  });

test('capitalize fithamlak is Fithamlak', () => {
    expect(capitalize('fithamlak')).toBe('Fithamlak');
  });