const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketio(server);
const {joinUser,getUser} = require('./util/user');
var cors =require('cors');
app.use(cors());
io.on('connection', (socket) => {

    //Join a room

    console.log("Connected");

    socket.on('joinRoom',({username,room}) => {
        const user = joinUser(socket.id,username,room);

        socket.join(user.room);

        console.log(user)

        socket.broadcast.to(user.room).emit('message',`${user.username} Joined`);

    })

    socket.on('chatMessage',msg=>{
        const user = getUser(socket.id);
        io.to(user.room).emit('message', {user: `${user.username}`,msg:`msg`});
    })

    socket.on('disconnect',()=>{
        socket.broadcast.emit('message', 'A user has been Disconnected');
    })
 });
const port = 8000;
server.listen(port,()=>{
    console.log(`The Server is listening on port ${port}`)
});