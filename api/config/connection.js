const mongoose=require('mongoose')

mongoose.connect("mongodb://localhost/my_chat").then(()=>{
    console.log('Db connected');
}).catch((e)=>{
    console.log(e)
})


module.exports=mongoose