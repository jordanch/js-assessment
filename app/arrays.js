exports = typeof window === 'undefined' ? global : window;

// jordan should you include negative input? for now, due to time, no.
exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce(function(a, b) {
      return a + b;
    }, 0);
  },

  remove: function(arr, item) {
    return arr.filter(function(el) {
      // assume strict comparision appropriate.
      return el !== item;
    });
  },

  // jordan check if there's a better way to do this.
  // jordan i don't think modifying x is a good idea
  removeWithoutCopy: function(arr, item) {
    for (var x = 0; x < arr.length; x++) {
      if (arr[x] === item) {
        arr.splice(x, 1);
        // question: i once watched a talked where a guy spoke about 'separate' being more readable and maintainable
        // than 'shorthand' (http://eslint.org/docs/rules/operator-assignment). what do you guys think?
        x -= 1;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.splice(0, 1);
    return arr;
  },

  concat: function(arr1, arr2) {
    return Array.prototype.concat(arr1, arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var count = 0;
    arr.forEach(function(el) {
      if (el === item) {
        count += 1;
      }
    });
    return count;
  },

  // jordan improve this.
  duplicates: function(arr) {
    var duups = [];
    for (var x = 0; x < arr.length; x++) {
      var a = arr.slice(x + 1);
      if (a.indexOf(arr[x]) !== -1) {
        if (duups.indexOf(arr[x]) === -1) {
          duups.push(arr[x]);
        }
      }
    }
    return duups;
  },

  square: function(arr) {
    return arr.map(function(el) {
      return Math.pow(el, 2);
    });
  },

  findAllOccurrences: function(arr, target) {
    var occurances = [];
    arr.forEach(function(el, index) {
      if (el === target) {
        occurances.push(index);
      }
    });
    return occurances;
  }
};
