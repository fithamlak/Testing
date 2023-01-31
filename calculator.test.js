const Calculator = require('./calculater.js')
describe('calulator add', () => {
  test('add 10 and 5 is 15', () => {
    expect(() => Calculator.add(10, 5).toBe(15));
  });
  test('add 5 and 5 is not 8', () => {
    expect(() => Calculator.add(5, 5).toNotBe(8));
  });
  test('add x and y is not a number', () => {
    expect(() => Calculator.add(x, y).toThrow());
  });
});
  
describe('calulator subtract', () => {
  test('subtract 5 from 10 is 5', () => {
    expect(() => Calculator.subtract(10, 5).toBe(5));
  });
  test('subtract 10 from 5 is -5', () => {
    expect(() => Calculator.subtract(5, 10).toBe(-5));
  });
  test('subtract x and y is not a number', () => {
    expect(() => Calculator.subtract(x, 2).toThrow());
  });
});
  
describe('calulator divide', () => {
  test('divide 30 by 10 is 3', () => {
    expect(() => Calculator.divide(30, 10).toBe(3));
  });
  test('divide 9 by 3 is 3', () => {
    expect(() => Calculator.divide(9, 3).toBe(3));
  });
  test('divide x and y is not a number', () => {
    expect(() => Calculator.divide(x, y).toThrow());
  });
});
  
describe('calulator multiply', () => {
  test('multiply 6 by 7 is 42', () => {
    expect(() => Calculator.multiply(6, 7).toBe(42));
  });
  test('multiply 5 by 10 is 50', () => {
    expect(() => Calculator.multiply(5, 10).toBe(50));
  });
  test('multiply x and y is not a number', () => {
    expect(() => Calculator.multiply(x, y).toThrow());
  });
});