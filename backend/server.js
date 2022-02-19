const path =require("path")
const express=require("express")
const http =require("http")
const socketio=require("socket.io")
const formatMessage = require("./utils/messages")
const {userJoin,getCurrentUser,userLeave,getRoomUsers}=require('./utils/user')
const app=express()
const server =http.createServer(app);
const io =socketio(server);


io.on("connection", socket=>{
    socket.on("joinroom",({username,room})=>{
            const user=userJoin(socket.id,username,room);
            socket.join(user.room)

        socket.emit("message",formatMessage("omm","aao"))
    
        socket.broadcast.to(user.room).emit("message",formatMessage("omm",`${user.username} joined`))
        io.to(user.room).emit("roomUsers",{
            room:user.room,
            users:getRoomUsers(user.room)
        })
    })

    socket.on("disconnect",()=>{
        const user=userLeave(socket.id)
        if(user){

            io.to(user.room).emit("message",formatMessage("omm",`${user.username} has left the chat`))
            io.to(user.room).emit("roomUsers",{
                room:user.room,
                users:getRoomUsers(user.room)
            })
        }
    })
    socket.on("chatMessage",(chats)=>{
        const user= getCurrentUser(socket.id)
        io.to(user.room).emit("message",formatMessage(user.username,chats))
    })
})


const PORT=3000 || process.env.PORT
app.use(express.static(path.join(__dirname,'public')))
server.listen(PORT,()=>console.log(`server on ${PORT}`))