import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Chat.css';
function Chatcard(props)
{
    return(
        <div>
            <h1>{props.user}</h1>
            <h1>{props.message}</h1>
        </div>
    )
}
function Chat(props){
    var list=props.messages
    console.log(list)
    return (
        <>
            <div className="box">
                <h1>Chats</h1>
                {list.map((msg) => (
                        <Chatcard
                            user={msg.user}
                            message={msg.message}
                        />
                    ))}
            </div>
        </>
    )
}

export default Chat;