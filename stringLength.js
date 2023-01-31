const stringLength = (string) => {
  if (typeof string === 'string' || string instanceof String) {
    return string.length;
  } else {
    throw new Error('Iput is not string length is');
  }
};

module.exports = stringLength;