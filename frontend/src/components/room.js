import React, { useEffect, useState,useRef } from 'react'
import { useSocket } from '../socket/socketprovider';
import Footer from './footer';
import Chat from "./Chat";
import axios from 'axios';
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
const Room = (props) => {
    const [messages,setmessages]=useState([]);
    const socket = useSocket();
    useEffect(() => {
        if (socket == null)
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

    useEffect(() => {
        if (socket == null) return
        socket.on('chatMessage', (msg) => {
            console.log("Inside socket.on");
            let username=msg.user;
            let arr=messages
            axios.post('https://translate-metafratis.herokuapp.com/translate', {
            text:msg.msg,
            lan:"english"
        })
        .then(function (response) {
        arr.push({"user": username, "message":response.data.output})
        setmessages(arr)
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
    };
    const stopHandle = () => {
      setIsListening(false);
      microphoneRef.current.classList.remove("listening");
      SpeechRecognition.stopListening();
    };

    const handleSend=()=>{
        if (socket == null)
            return
        console.log(socket);
        socket.emit('chatMessage', sendeRef.current.value);
        resetTranscript();
    }
    return (
        <>
            <Chat
                messages={messages}
            />
            <button ref={microphoneRef} className="mic" onClick={handleListing}><img src="../assets/mic.png" width="50" height="50" alt="" /></button>
            {isListening && (
                <button className="microphone-stop btn" onClick={stopHandle}>
                    Stop
                </button>
            )}

                <div className="microphone-result-container">
                    <textarea  ref={sendeRef} value={transcript} col="5" row="6"/>
                </div>
                <button className="Send_button" onClick={handleSend}>Send</button>

            <Footer></Footer>
        </>
    )
}
export default Room;