import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Chat.css';
function Chatcard(props)
{
    if (props.user == props.currentUser){
        return(
            <div className="personal">
                <h4>{props.user}<br/>
                {props.message}</h4>
            </div>
        )
    }
    else {
        return(
            <div className="others">
                <h4>{props.user}<br/>
                {props.message}</h4>
            </div>
        )
    }
    
}
function Chat(props){
    var list= props.messages
    var currentUser =  props.currentUser
    console.log(list)
    return (
        <>
            <div className="box">
                <div className="chat"><h1>Chats</h1><hr/></div>
                {list.map((msg) => (
                        <Chatcard
                            user={msg.user}
                            message={msg.message}
                            currentUser={currentUser}
                        />
                    ))}
            </div>
        </>
    )
}

export default Chat;