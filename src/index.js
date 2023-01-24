require("dotenv").config();
const express= require("express");
const cors= require("cors");
const connect = require("./config/db");
const user= require("../src/route/user.route")
const job= require("../src/route/job.route")
const PORT= process.env.PORT;


const app= express();
app.use(express.json());
app.use(cors());


app.use("/mock13",user)
app.use("/mock13/job",job)


app.listen(PORT,async()=>{
    await connect();
    console.log(`listening at http://localhost:${PORT}`)
})