const jwt = require("jsonwebtoken");
const JWT_SERVER_SECRET = process.env.JWT_SERVER_SECRET

const verifyAdminToken =(req,res,next)=>{
    const token = req.headers['authorization']?.split(' ')[1];

    console.log(token);
    
    if(!token){
        return res.status(401).json({message:"Access denied.No token provided"});
    }
    jwt.verify(token,JWT_SERVER_SECRET,(err,user)=>{
        if(err){
            return res.status(403).json({message:"Invalid Credientials"});
        }
        req.user = user;
        next();
    })
}
module.exports = verifyAdminToken;