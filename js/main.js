/*global $ require*/

(function() {

  "use strict";

  var user = require("./lib/user.js").user;

  $("body").html(user("jedcn"));

})();
