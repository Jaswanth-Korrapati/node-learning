const { model } = require("mongoose");
const userModel= require("../models/user");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
require("dotenv").config();


const signup=async(req,res)=>{
//Existing user check
    //Hashed password
    //User creation
    //Token Generation
    if (!req.body.email && !req.body.password && !req.body.username) {
        res.status(400).send({ message: "Content can not be empty!" });
    }

    const{username,email,password}=req.body;
    try {
        const existingUser=await userModel.findOne({email:email});
        if(existingUser){
            return res.status(400).json({message:"User already Exists"});
        }
        const hashedPassword = await bcrypt.hash(password,10);

        const result= await userModel.create({
            email: email,
            password: hashedPassword,
            username: username

        });

       // const token = jwt.sign({email:result.email, id:result._id}, process.env.SECRET_KEY, { expiresIn: '1h' });
        //res.status(200).json({user:result, token: token});

    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Something Went Wrong"});

    }

}

const signin=async(req,res)=>{
    const{email,password}=req.body;
    try {

        const existingUser=await userModel.findOne({email:email});
        if(!existingUser){
            return res.status(404).json({message:"User does not Exists"});
        }

        //matching the credentials. In database we store hashed password but now we will get normal password so to match we will use bcript here


        const matchPassword = await bcrypt.compare(password, existingUser.password);
        if(!matchPassword){
            return res.status(400).json({message: "Invalid Credentials"});
        }

        const token = jwt.sign({email:existingUser.email, id:existingUser._id}, process.env.SECRET_KEY, {expiresIn: '1h'});
        res.status(200).json({user:existingUser, token: token});

    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Something Went Wrong"});

    }


}
module.exports={signin,signup};