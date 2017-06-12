exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  // tired code. gettting it done!
  reduceString: function (str, amount) {
    var valid = [],
      mapOfFound = {},
      stringElements = str.split('');
    stringElements.forEach(function (el, index) {
      if (mapOfFound.hasOwnProperty(el) === false) {
        mapOfFound[el] = 1;
        if (amount >= 1) {
          valid.push(el);
          mapOfFound[el] = 1;
        }
      } else if (mapOfFound.hasOwnProperty(el) === true) {
        if (mapOfFound[el] < amount) {
          valid.push(el);
          mapOfFound[el] += 1;
        }
        if (stringElements[index] !== stringElements[index + 1]) {
          // reset counter.
          mapOfFound[el] = 0;
        }
      }
    });
    return valid.join('');
  },

  wordWrap: function (str, cols) {

  },

  reverseString: function (str) {
    return str.split('').reverse().join('');
  }
};
