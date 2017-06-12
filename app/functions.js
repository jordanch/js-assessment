exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function (fn, arr) {
    return fn.apply(this, arr);
  },

  speak: function (fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function (str) {
    return function (str1, str2) {
      return str1 + str2;
    }.bind(this, str + ', ');
  },

  makeClosures: function (arr, fn) {
    return arr.map(function (el) {
      return fn.bind(this, el);
    });
  },

  // jordan check.
  partial: function (fn, str1, str2) {
    var slice = Array.prototype.slice,
      origArguments = slice.call(arguments, 1);
    return function () {
      var combinedArguments = Array.prototype.concat(origArguments, slice.call(arguments));
      return fn.apply(null, combinedArguments);
    };
  },

  // jordan check.
  useArguments: function () {
    var args = Array.prototype.slice.call(arguments);
    return args.reduce(function (a, b) {
      return a + b;
    });
  },

  // jordan check.
  callIt: function (fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    fn.apply(null, args);
  },

  // jordan check.
  partialUsingArguments: function (fn) {
    var slice = Array.prototype.slice,
      origArguments = slice.call(arguments, 1);
    return function () {
      var combinedArguments = Array.prototype.concat(origArguments, slice.call(arguments));
      return fn.apply(null, combinedArguments);
    };
  },

  // jordan to do
  curryIt: function (fn) {
    // var reqArgs = fn.length,
    //   self = this.curryIt,
    //   combined;
    // return function () {
    //   var args = Array.prototype.slice.call(arguments);
    //   combined.concat(args);
    //   if (combined.length === reqArgs) {
    //     return fn.apply(null, combined);
    //   }
    //   return self;
    // };
  }
};
