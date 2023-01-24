const express= require("express");
const { jobCreate, getAllJob, DeleteJob, searchFilter } = require("../controller/job.controller");
const { search } = require("./user.route");

const router= express.Router();
router.route("/create").post(jobCreate)
router.route("/getAll").get(getAllJob)
router.route("/delete/:id").delete(DeleteJob);
router.route("/serach&filter").get(searchFilter)

module.exports=router