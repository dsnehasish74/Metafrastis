import React, { useEffect, useState,useRef } from 'react'
import { useSocket } from '../socket/socketprovider';
import Footer from './footer';
import Chat from "./Chat";
import axios from 'axios';
import {useUser} from '../provider/userprovider.js'
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { useLang } from '../provider/langprovider.js';
const Room = (props) => {
    const [messages,setmessages]=useState([]);
    const [text,settext]=useState();
    const [mike,setmike]=useState(0);
    const socket = useSocket();
    const user=useUser();
    const lang=useLang();
    console.log(user);
    console.log(lang);
    useEffect(() => {
        if (socket == null)
            return
        console.log(socket);
        socket.emit('joinRoom', { username: user, room: 1 });
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

    useEffect(() => {
        if (socket == null) return
        socket.on('chatMessage', (msg) => {
            console.log("Inside socket.on");
            let username=msg.user;
            axios.post('https://translate-metafratis.herokuapp.com/translate', {
            text:msg.msg,
            lan:lang,
        })
        .then(function (response) {
        setmessages((messages)=>messages.concat([{"user": username, "message":response.data.output}]))
    })
        })
        console.log("Outside socket.on");
        return () => socket.off('chatMessage');
    }, [socket])

    const { transcript, resetTranscript } = useSpeechRecognition();
    const [isListening, setIsListening] = useState(false);
    const microphoneRef = useRef(null);
    const sendeRef = useRef(null);
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      return (
        <div className="mircophone-container">
          Browser is not Support Speech Recognition.
        </div>
      );
    }
    const handleListing = () => {
      setIsListening(true);
      microphoneRef.current.classList.add("listening");
      SpeechRecognition.startListening({
        continuous: true,
      });
      setmike(1);
    };
    const stopHandle = () => {
      setIsListening(false);
      microphoneRef.current.classList.remove("listening");
      SpeechRecognition.stopListening();
    };
    function setthetext(e)
    {
        settext(e.target.value);
    }
    const handleSend=()=>{
        if (socket == null)
            return
        console.log(socket);
        if (mike==1)
            socket.emit('chatMessage', sendeRef.current.value);
        else
            socket.emit('chatMessage', text);
        resetTranscript();
        setmike(0);
    }
    return (
        <div className="room_body">
            <div className="left_window">
            <button ref={microphoneRef} className="mic" onClick={handleListing}><img src="../assets/mic.png" width="50" height="50" alt="" /></button>
            {isListening && (
                <button className="microphone-stop" onClick={stopHandle}>
                    Stop
                </button>
            )}

                <div className="microphone-result-container">
                    <div  ref={sendeRef}> {transcript} </div>
                </div>
                {mike==0 &&(
                    <textarea className="type" type="text" col="5" row="6" onChange={setthetext}/>
                )}
                <button className="Send_button" onClick={handleSend}>Send</button>
                </div>
                <Chat
                messages={messages}
                user={user}
            />
            <Footer></Footer>
        </div>
    )
}
export default Room;