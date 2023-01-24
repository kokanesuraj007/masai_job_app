"use strict";

var express = require("express");

var _require = require("../controller/job.controller"),
    jobCreate = _require.jobCreate,
    getAllJob = _require.getAllJob,
    DeleteJob = _require.DeleteJob,
    searchFilter = _require.searchFilter;

var _require2 = require("./user.route"),
    search = _require2.search;

var router = express.Router();
router.route("/create").post(jobCreate);
router.route("/getAll").get(getAllJob);
router.route("/delete/:id")["delete"](DeleteJob);
router.route("/serach&filter").get(searchFilter);
module.exports = router;
//# sourceMappingURL=job.route.dev.js.map
