"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var User = require("../model/user.model");

var argon2 = require("argon2");

var jwt = require("jsonwebtoken");

exports.register = function _callee(req, res) {
  var _req$body, name, email, password, user, newemail, second, hash, newUser, _newUser;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, name = _req$body.name, email = _req$body.email, password = _req$body.password;
          _context.next = 3;
          return regeneratorRuntime.awrap(User.findOne({
            email: email
          }));

        case 3:
          user = _context.sent;
          newemail = email.split("@");
          second = newemail[1];
          _context.next = 8;
          return regeneratorRuntime.awrap(argon2.hash(password));

        case 8:
          hash = _context.sent;
          _context.prev = 9;

          if (!user) {
            _context.next = 14;
            break;
          }

          return _context.abrupt("return", res.status(400).send("user already exists"));

        case 14:
          if (!(second == "masaischool.com")) {
            _context.next = 21;
            break;
          }

          newUser = new User({
            email: email,
            password: hash,
            name: name,
            role: "admin"
          });
          _context.next = 18;
          return regeneratorRuntime.awrap(newUser.save());

        case 18:
          res.status(201).send({
            messsage: "admin created sucessfully",
            "admin": newUser
          });
          _context.next = 25;
          break;

        case 21:
          _newUser = new User({
            email: email,
            password: hash,
            name: name
          });
          _context.next = 24;
          return regeneratorRuntime.awrap(_newUser.save());

        case 24:
          res.status(201).send({
            messsage: "user created sucessfully",
            "user": _newUser
          });

        case 25:
          _context.next = 30;
          break;

        case 27:
          _context.prev = 27;
          _context.t0 = _context["catch"](9);
          console.log(_context.t0.messsage);

        case 30:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[9, 27]]);
};

exports.login = function _callee2(req, res) {
  var _req$body2, email, password, user, token;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
          _context2.next = 3;
          return regeneratorRuntime.awrap(User.findOne({
            email: email
          }));

        case 3:
          user = _context2.sent;
          _context2.next = 6;
          return regeneratorRuntime.awrap(argon2.verify(user.password, password));

        case 6:
          if (!_context2.sent) {
            _context2.next = 9;
            break;
          }

          token = jwt.sign(_objectSpread({}, user), "Vikalp@99", {
            expiresIn: "7 days"
          });
          return _context2.abrupt("return", res.send({
            messaage: "Login sucessfull",
            token: token,
            user: user
          }));

        case 9:
          ;
          res.status(401).send("Invalid Crendential");

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.getUser = function _callee3(req, res) {
  var user;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(User.findById(req.params.id));

        case 2:
          user = _context3.sent;
          _context3.prev = 3;

          if (!user) {
            _context3.next = 8;
            break;
          }

          return _context3.abrupt("return", res.status(200).send({
            message: "true",
            user: user
          }));

        case 8:
          return _context3.abrupt("return", res.status(401).send("user not found"));

        case 9:
          _context3.next = 14;
          break;

        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](3);
          console.log(_context3.t0.messaage);

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[3, 11]]);
};
//# sourceMappingURL=user.controller.dev.js.map
