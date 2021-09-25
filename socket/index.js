const { Socket } = require('socket.io')

const io=require('socket.io')(8000,{
    cors:{
        origin:'http://localhost:3000'
    }
})

let users=[]

const addUser=(userId,socketId)=>{
    !users.some((user)=>{
        (user.userId===userId)&&users.push({
            userId,socketId
        })
    })

}

const removeuser=(socketId)=>{
    users=users.filter((user)=>user.socketId !==socketId)
}

const getuser=(userId)=>{
    return users.find(user=>user.userId===userId)
}

io.on('connection',(socket)=>{
    console.log(socket)
    socket.on("addUser",(userId)=>{
        addUser(userId,socket.id)
        io.emit('getUsers',users)
    })

    socket.on('sendMessage',({senderId,receiverId,text})=>{
        const user=getuser(receiverId)
        io.to(user.socketId).emit('getMessage',{
            senderId,
            text
        })
    })
    socket.on('disconnect',()=>{
        console.log('a user is disconnect')
        removeuser(socket.id)
        io.emit('getUsers',users)
    })

})