const authRouter = require('express').Router();

//auth routes goes here

//signup route
authRouter.post('/signup',(req,res) =>{
    //signup logic goes here
    res.json({
        success : true,
        message : "Signup Route Sucess"
    })
})
//login route
authRouter.post('/login',(req,res)=>{
    //login logic goes here
    res.json({
        success: true,
        messages: "Login Sucess"
    })
})
//reset password route
authRouter.post('/password-reset',(req,res)=>{
    //reset password logic goes here
    res.json({
        success: true,
        messages: "Reset password sucess"
    })
})
//otp verification route
authRouter.post('/otp-verfication',(req,res)=>{
    //otp-verification logic goes here
    res.json({
        success: true,
        messages: "Otp-verification sucess"
    })
})

module.exports = authRouter;