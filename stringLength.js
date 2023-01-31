const stringLength = (string) => {
  if (typeof string === 'string' || string instanceof String) {
    if(string.length > 0 && string.length < 10)
    return string.length;
    else{throw new Error('string length is 0 or greater thhan 10');}
  } else {
    throw new Error('Iput is not string length is');
  }
};

module.exports = stringLength;