const mongoose = require("mongoose");

let jobScehma= mongoose.Schema({
    companyName:{
        type:String,
        require:true
    },
    Position:{
       type:String,
       require:true,
    },
    Contract:{
        type:String,
        enum:["part","full"],
        default:"full"
    },
    Location:{
        type:String,
        require:true
    }
})

let Job= mongoose.model("job",jobScehma);
module.exports=Job;