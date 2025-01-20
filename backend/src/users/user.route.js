const express = require('express');
const User = require('./user.model');
const jwt = require ('jsonwebtoken')
const router = express.Router();
require('dotenv').config()


const JWT_SERVER_SECRET = process.env.JWT_SERVER_SECRET

router.post("/admin", async (req, res) => {
   const{username,password} =req.body;
   try{
   // const admin = await User.findOne({username})
   const admin = await User.findOne({username})
    if(!admin){
      res.status(404).send ({message:"admin not found"})
    }
    if(admin.password !== password){
      res.status(401).send({message:"invalid password"})
    }

    const token = jwt.sign({id:admin._id,username:admin.username,role:admin.role},
      JWT_SERVER_SECRET,
      {expiresIn:"1h"}
    )

    return res.status(200).json({
      message:"login successful",
      token:token,
      user:{
        username:admin.username,
        role:admin.role
      }
    })

   } catch(error){
    console.error("failed to loging as admin",error)
       res.status(401).send({message:"failed to loging as admin"})
   }
})

module.exports = router;