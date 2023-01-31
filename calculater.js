class Calculator {
  static add = (x, y) => {
    if (typeof x !== 'number' || typeof y !== 'Number') {
      throw new Error('Not a number');
    } else {
     return x + y;
    }
  };
  static subtract = (x, y) => {
    if (typeof x !== 'number' || typeof y !== 'Number') {
      throw new Error('Not a number');
    } else {
     return x - y;
    }
  };
  static divide = (x, y) => {
    if (typeof x !== 'number' || typeof y !== 'Number') {
      throw new Error('Not a number');
    } else {
     return x / y;
    }
  };
  static multiply = (x, y) => {
    if (typeof x !== 'number' || typeof y !== 'Number') {
      throw new Error('Not a number');
    } else {
     return x * y;
    }
  };
}

module.exports = Calculator;