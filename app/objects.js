exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate: function (obj) {
    var keyVals = [];
    Object.keys(obj).forEach(function (key) {
      keyVals.push(key + ': ' + obj[key]);
    });
    return keyVals;
  }
};
