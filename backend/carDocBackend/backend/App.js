// const express = require('express');
const cors = require('cors');
const { verify } = require('crypto');
const express = require('express');
const  jwt = require("jsonwebtoken");
const app = express();
const port = 3000;
const secretKey = "secretkey"; // Replace with your SECRET KEY from Auth0

app.get("/",(req,resp)=>{
    resp.json({
        message:"a sample api"
    })
})

app.post("/login",(req,resp)=>{
// const user ={
//     id:1,
//     username:"rithik",
//     email : "rithik@gmail.com"
// }

const userData = req.data;
jwt.sign({userData},secretKey,{expiresIn:'30000s'},(err,token)=>{
    resp.json({
        token
    });
}) 
})

app.post("/user-registration ",(req,resp)=>{
    let newUser=req.data;
})

app.post("/profile",verifyToken,(req,resp)=>{
    jwt.verify(req.token,"secretkey",(err,authData)=>{
        if(err){
            resp.send("Invalid user");}
        else{resp.json({
          message:"Profile Data",
          authData
        })}
})})

function verifyToken(req,res,next) {
    const bearerHeader = req.headers['authorization'];
    
    if (typeof bearerHeader !== undefined){
        const bearer = bearerHeader.split(" ");
        const token =  bearer[1];
        req.token = token;
        next();
    }
}

app.post("/service",verifyToken,(req,res)=>{
    jwt.verify(req.token,"secretkey",(err,authData)=>{
        if(err){
            resp.send("Invalid user");}else{resp.json({
                message:"your service  request has been submitted successfully.",
                authData
                  
            })
                
            }
        
    })
})

app.post("/contact",(req,resp)=>{
    const contactFormData = req.data;
    
})



app.listen(port,()=>{
console.log("listening at port 3000");
});