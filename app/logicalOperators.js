exports = typeof window === 'undefined' ? global : window;

exports.logicalOperatorsAnswers = {
  or: function(a, b) {
    return a === true || b === true;
  },

  and: function(a, b) {
    return !!a === true && !!b === true;
  }
};
