const router=require('express').Router()
const Message=require('../models/message')


router.post('/message',async (req,res)=>{
    const newMessage=new Message(req.body)
    try{
        const savedMessage=await newMessage.save();
        res.status(200).send(savedMessage)
    }catch(e){
        res.status(500).send(e)
    }
})

router.get('/message/:conversationId',async(req,res)=>{
    try{
       const conversationId=req.params.conversationId
      
        const message=await Message.find({
            conversationId
        })
        return res.status(200).send(message)
    }catch(e){
        console.log(e)


        
    }
})



module.exports=router



