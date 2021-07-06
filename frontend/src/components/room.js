import React, { useEffect, useState,useRef } from 'react'
import { useSocket } from '../socket/socketprovider';
import Footer from './footer';
import Chat from "./Chat";
import axios from 'axios';
import {useUser} from '../provider/userprovider.js'
import { useLang } from '../provider/langprovider.js';
const Room = (props) => {
    const [messages,setmessages]=useState([]);
    const [text,settext]=useState();
    const socket = useSocket();
    const user=useUser();
    const lang=useLang();
    useEffect(() => {
        if (socket == null)
            return
        socket.emit('joinRoom', { username: user, room: 1 });
    }, [socket])

    useEffect(() => {
        if (socket == null) return
        socket.on('message', (msg) => {
        })
        return () => socket.off('message');
    }, [socket])

    useEffect(() => {
        console.log("hi")
        if (socket == null) return
        socket.on('chatMessage', (msg) => {
            let username=msg.user;
            console.log(msg.msg)
            axios.post('https://translate-meta.herokuapp.com/translate', {
            text:msg.msg,
            lan:lang,
        })
        .then(function (response) {
        setmessages((messages)=>messages.concat([{"user": username, "message":response.data.output}]))
    })
        })
        return () => socket.off('chatMessage');
    }, [socket])
    const [copy,setcopy]=useState('Click to Copy Meeting ID.');
    const [textContent,settextContent]=useState([]);
    function copyToClipboard(e)
    {
        navigator.clipboard.writeText(textContent.innerText);
        setcopy('Copied to Clipboard!');
    };
    function setthetext(e)
    {
        settext(e.target.value);
    }
    const handleSend=()=>{
        if (socket == null)
            return
        socket.emit('chatMessage', text);
    }
    return (
        <div className="room_body">
            <h2>Meeting Id:-</h2>
            <p ref={(c) => (settextContent(c))}>{props.room_id}</p>
            <button onClick={copyToClipboard}>Copy</button>
            <div className="left_window">
            </div>
            <Chat
                messages={messages}
                user={user}
            />
            <textarea className="type" type="text" col="5" row="6" onChange={setthetext}/>
            <button className="Send_button" onClick={handleSend}>Send</button>
            <Footer history={props.history}></Footer>
        </div>
    )
}
export default Room;