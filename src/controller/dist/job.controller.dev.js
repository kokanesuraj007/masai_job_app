"use strict";

var _require = require("../model/job.model"),
    find = _require.find;

var Job = require("../model/job.model");

exports.jobCreate = function _callee(req, res) {
  var _req$body, companyName, Position, Contract, Location, newJob;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, companyName = _req$body.companyName, Position = _req$body.Position, Contract = _req$body.Contract, Location = _req$body.Location;
          _context.prev = 1;
          newJob = new Job({
            companyName: companyName,
            Position: Position,
            Contract: Contract,
            Location: Location
          });
          _context.next = 5;
          return regeneratorRuntime.awrap(newJob.save());

        case 5:
          return _context.abrupt("return", res.status(201).send({
            message: true,
            newJob: newJob
          }));

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          console.log(_context.t0.message);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 8]]);
};

exports.getAllJob = function _callee2(req, res) {
  var _req$query, _req$query$limit, limit, _req$query$page, page, jobs;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _req$query = req.query, _req$query$limit = _req$query.limit, limit = _req$query$limit === void 0 ? 10 : _req$query$limit, _req$query$page = _req$query.page, page = _req$query$page === void 0 ? 1 : _req$query$page;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Job.find().limit(limit).skip((page - 1) * limit));

        case 3:
          jobs = _context2.sent;
          _context2.prev = 4;
          return _context2.abrupt("return", res.status(201).send(jobs));

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](4);
          console.log(_context2.t0.message);

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[4, 8]]);
};

exports.searchFilter = function _callee3(req, res) {
  var _req$query2, companyName, Location, Contract, alljob, _alljob, _alljob2;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _req$query2 = req.query, companyName = _req$query2.companyName, Location = _req$query2.Location, Contract = _req$query2.Contract;

          if (!(companyName != "")) {
            _context3.next = 6;
            break;
          }

          _context3.next = 4;
          return regeneratorRuntime.awrap(Job.find({
            companyName: companyName
          }));

        case 4:
          alljob = _context3.sent;
          return _context3.abrupt("return", res.status(200).send(alljob));

        case 6:
          if (!(Location != "")) {
            _context3.next = 11;
            break;
          }

          _context3.next = 9;
          return regeneratorRuntime.awrap(Job.find({
            Location: Location
          }));

        case 9:
          _alljob = _context3.sent;
          return _context3.abrupt("return", res.status(200).send(_alljob));

        case 11:
          if (!(Contract != "")) {
            _context3.next = 16;
            break;
          }

          _context3.next = 14;
          return regeneratorRuntime.awrap(Job.find({
            Location: Location
          }));

        case 14:
          _alljob2 = _context3.sent;
          return _context3.abrupt("return", res.status(200).send(_alljob2));

        case 16:
        case "end":
          return _context3.stop();
      }
    }
  });
};

exports.DeleteJob = function _callee4(req, res) {
  var job;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(Job.findByIdAndDelete(req.params.id));

        case 2:
          job = _context4.sent;
          _context4.prev = 3;
          return _context4.abrupt("return", res.status(200).send({
            message: true
          }));

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](3);
          console.log(_context4.t0.message);

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[3, 7]]);
};
//# sourceMappingURL=job.controller.dev.js.map
