"use strict";

require("dotenv").config();

var express = require("express");

var cors = require("cors");

var connect = require("./config/db");

var user = require("../src/route/user.route");

var job = require("../src/route/job.route");

var PORT = process.env.PORT;
var app = express();
app.use(express.json());
app.use(cors());
app.use("/mock13", user);
app.use("/mock13/job", job);
app.listen(PORT, function _callee() {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(connect());

        case 2:
          console.log("listening at http://localhost:".concat(PORT));

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
});
//# sourceMappingURL=index.dev.js.map
