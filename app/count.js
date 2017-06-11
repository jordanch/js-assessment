exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    console.log(start);
    var increment = start,
      obj = {},
      interval = window.setInterval(function () {
        if (increment < end) {
          increment += 1;
          console.log(increment);
        } else {
          window.clearInterval(interval);
        }
      }, 100);
    obj.cancel = function () {
      window.clearInterval(interval);
    };
    return obj;
  }
};
