const { find } = require("../model/job.model");
const Job= require("../model/job.model")

exports.jobCreate=async(req,res)=>{
    let {companyName,Position,Contract,Location}=req.body;
    try{
       let newJob= new Job({companyName,Position,Contract,Location});
       await newJob.save();
       return res.status(201).send({message:true,newJob})
    }
    catch(e){
       console.log(e.message)
    }
}
exports.getAllJob=async(req,res)=>{
    const {limit=10,page=1}=req.query;
    let jobs= await Job.find().limit(limit).skip((page-1)*limit);
    try{
       return res.status(201).send(jobs)
    }
    catch(e){
        console.log(e.message)
    }
}
exports.searchFilter=async(req,res)=>{
   const {companyName,Location,Contract}=req.query;
  if(companyName!=""){
    let alljob= await Job.find({companyName});
   return res.status(200).send(alljob)
  }
  if(Location!=""){
    let alljob= await Job.find({Location});
   return res.status(200).send(alljob)
  }
  if(Contract!=""){
    let alljob= await Job.find({Location});
    return res.status(200).send(alljob)
  }
  
}
exports.DeleteJob=async(req,res)=>{
    const job= await Job.findByIdAndDelete(req.params.id);
   try{
      return res.status(200).send({message:true})
   }
   catch(e){
     console.log(e.message)
   }
}
