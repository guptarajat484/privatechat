const route=require('express').Router()
const Conversation = require('../models/conversation')


route.post('/conversation',async(req,res)=>{
    console.log(req.body)
    const conversations=new Conversation({
        members:[
            req.body.senderId,
            req.body.receiverId
        ]
    })
    const c=await conversations.save()
    return res.status(200).send({"conversation":c})

})

route.get('/conversation/:userId',async(req,res)=>{
    try{
        const conversation=await Conversation.find({
            members:{
                $in:[req.params.userId]
            }
        })
        return res.status(200).send({conversation})
    }catch(e){
        return res.status(500).send(e)
    }
})
module.exports=route


