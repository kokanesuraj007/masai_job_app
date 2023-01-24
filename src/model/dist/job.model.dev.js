"use strict";

var mongoose = require("mongoose");

var jobScehma = mongoose.Schema({
  companyName: {
    type: String,
    require: true
  },
  Position: {
    type: String,
    require: true
  },
  Contract: {
    type: String,
    "enum": ["part", "full"],
    "default": "full"
  },
  Location: {
    type: String,
    require: true
  }
});
var Job = mongoose.model("job", jobScehma);
module.exports = Job;
//# sourceMappingURL=job.model.dev.js.map
