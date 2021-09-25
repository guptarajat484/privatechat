const User = require('../models/user')
const bcrypt=require('bcrypt')
const route=require('express').Router()

route.post('/signup',async (req,res)=>{
    const {name,email,password}=req.body
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const user=new User({
        name,
        email,
        password:hash
    })
    await user.save()
    return res.send(user)
})



module.exports=route