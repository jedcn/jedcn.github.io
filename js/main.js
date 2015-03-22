(function() {

  'use strict';

  function possiblyDefault(defaultUser, location) {
    var result = defaultUser,
        firstPartOfHost;
    if (location && location.host) {
      firstPartOfHost = location.host.split('.')[0];
      if (firstPartOfHost.indexOf('localhost') !== 0) {
        console.log("using firstPartOfHost");
        result = firstPartOfHost;
      }
    }
    return result;
  }

  function user(defaultUser, location) {
    return possiblyDefault(defaultUser, location);
  }

  console.log(user('jedcn', window.location));

  // $.ajax({
  //   url: url,
  // }).done(function(userInfo, result, jqXHR) {
  //   console.dir(userInfo);
  // });

})();
