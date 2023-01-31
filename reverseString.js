const reverseString = (string) => {
    if (typeof string === 'string' || string instanceof String) {
      return string.split('').reverse().join('');
    } else {
        throw new Error('Iput is not string length is');
    }
  };

  module.exports = reverseString;