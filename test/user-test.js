/*global require describe it*/

var assert = require("assert"),
    user = require("../js/lib/user").user;

describe("User", function() {
  "use strict";
  describe("#user", function(){
    it("returns the user of a canonical user.github.io url", function(){
      assert.equal("user", user("user", "user.github.io"));
    });
  });
});
