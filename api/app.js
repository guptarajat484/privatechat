require('./config/connection')
const express=require('express')
const app=express()
app.use(express.json())
const user=require('./routes/user')
const message=require('./routes/messages')
const conversation=require('./routes/conversation')


app.use('/api',user)
app.use('/api',conversation)
app.use('/api',message)

app.listen(8000,()=>{
    console.log("Server is running on port 8000")
})