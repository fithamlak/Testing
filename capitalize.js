const capitalize = (string) => {
    if (typeof string === 'string' || string instanceof String) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } else {
        throw new Error('Iput is not string');
    }
  };
  
  module.exports = capitalize;