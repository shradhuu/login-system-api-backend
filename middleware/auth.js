const jwt = require("jsonwebtoken")
//middleware function
//const router = require("express").Router();

const auth = async (req,res,next)=> {
try {
   const token = req.header("auth")
   const varifyUser = await jwt.verify(token,process.env.SEC)
   if(verifyuser)
   {
       res.status(400).json({message:"invalidtoken"})
   }
   next()
} catch (error) {
    res.status(400).json({message:error.message})
    
}
}

module.exports = auth