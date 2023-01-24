"use strict";

var mongoose = require("mongoose");

var connect = function connect() {
  return regeneratorRuntime.async(function connect$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          mongoose.set('strictQuery', true);
          return _context.abrupt("return", mongoose.connect(process.env.URL));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
};

module.exports = connect;
//# sourceMappingURL=db.dev.js.map
