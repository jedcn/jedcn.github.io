/*global $, window*/

(function() {

  "use strict";

  function possiblyDefault(defaultUser, location) {
    var result = defaultUser,
        firstPartOfHost;
    if (location && location.host) {
      firstPartOfHost = location.host.split(".")[0];
      if (firstPartOfHost.indexOf("localhost") !== 0) {
        result = firstPartOfHost;
      }
    }
    return result;
  }

  function user(defaultUser, location) {
    return possiblyDefault(defaultUser, location);
  }

  $("body")
    .html(user("jedcn", window.location));

  // $.ajax({
  //   url: url,
  // }).doneno(function(userInfo, result, jqXHR) {
  //   console.dir(userInfo);
  // });

})();
