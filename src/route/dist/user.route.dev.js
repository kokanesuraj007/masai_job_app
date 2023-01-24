"use strict";

var express = require("express");

var _require = require("../controller/user.controller"),
    register = _require.register,
    login = _require.login;

var router = express.Router();
router.route("/signup").post(register);
router.route("/login").post(login);
module.exports = router;
//# sourceMappingURL=user.route.dev.js.map
