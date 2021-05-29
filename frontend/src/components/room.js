import React, { useEffect, useState } from 'react'
import { useSocket } from '../socket/socketprovider';
import Chat from './Chat.js';
import Footer from './footer.js';
const Room=(props)=>
{
    const socket = useSocket()
    useEffect(()=>{
        if (socket==null)
            return
            console.log(socket);
            socket.emit('joinRoom', { username: "Anish", room: 1 });
            console.log("HI")
    }, [socket])
    useEffect(() => {
        if (socket == null) return
        socket.on('message', (msg) => {
            console.log("Inside socket.on");
            console.log(msg);
        })
        console.log("Outside socket.on");
        return () => socket.off('message');
    }, [socket])
    
    return(
        <div>
            <Chat></Chat>
            <Footer></Footer>
        </div>
    )
}
export default Room;