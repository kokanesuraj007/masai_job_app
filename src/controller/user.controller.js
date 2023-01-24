const User=require("../model/user.model");
const argon2=require("argon2");
const jwt= require("jsonwebtoken");
exports.register=async(req,res)=>{
    const {name,email,password}=req.body;
    let user= await User.findOne({email:email});
    let newemail=email.split("@");
    let second=newemail[1]
    const hash= await argon2.hash(password);
    try{
        if(user){
            return res.status(400).send("user already exists")
        }else{
            if(second=="masaischool.com"){
            const newUser= new User({email,password:hash,name,role:"admin"});
            await newUser.save();
            res.status(201).send({messsage:"admin created sucessfully","admin":newUser})
            }else{
                const newUser= new User({email,password:hash,name});
            await newUser.save();
            res.status(201).send({messsage:"user created sucessfully","user":newUser})
            }
        }

    }
    catch(e){
       console.log(e.messsage)
    }
}

exports.login=async(req,res)=>{
    const {email,password}=  req.body;
    const user= await User.findOne({email});
    if(await argon2.verify(user.password,password)){
        const token=jwt.sign({
            ...user
        },"Vikalp@99",{
            expiresIn:"7 days"
        })
        return res.send({messaage:"Login sucessfull",token,user:user})
    };
    res.status(401).send("Invalid Crendential")
}

exports.getUser=async(req,res)=>{
    const user= await User.findById(req.params.id);
    try{
      if(user){
        return res.status(200).send({message:"true",user:user})
      }else{
        return res.status(401).send("user not found")
      }
    }
    catch(e){
        console.log(e.messaage)
    }
}
