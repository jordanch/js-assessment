exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise(function(resolve, reject) {
      resolve(value);
    });
  },

  manipulateRemoteData: function (url) {
    return new Promise(function(resolve, reject) {
      $.get(url).done(function(data) {
        resolve(data.people.sort(function(a, b) {
          var sort = a.name.localeCompare(b.name);
          if (sort < 0) {
            return -1;
          } else if (sort === 0) {
            return 0;
          }
          return 1;
        }).map(function(el) {
          return el.name;
        }));
      });
    });
  }
};
