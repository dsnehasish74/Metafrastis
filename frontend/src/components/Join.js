import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Join.css'
function Join(props){
    const [roomId, setroomId]=useState("");
    const setroom=(e)=>
    {
        setroomId(e.target.value);
        console.log(e.target.value);
    }
    const joinRoom = () => 
    {
        props.history.push("/meeting/" +roomId);
    }
    return (
        <>
            <div class="container">
                <form>
                    <label>Enter Meeting ID:</label>
                    <div className="meeting-id"><input type="text" name="meeting-id" size="15" onChange={setroom}/></div>
                    <label>Enter Username:</label>
                    <div className="username"><input type="text" name="meeting-id" size="15"/></div>
                    <button className="join_meeting" onClick={joinRoom}>JOIN MEETING</button>
                </form>
            </div>
        </>
    )
}

export default Join;