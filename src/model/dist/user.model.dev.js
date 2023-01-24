"use strict";

var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  role: {
    type: String,
    "enum": ["user", "admin"],
    "default": "user"
  }
});
var User = mongoose.model("user", userSchema);
module.exports = User;
//# sourceMappingURL=user.model.dev.js.map
