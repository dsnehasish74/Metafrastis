import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Join.css'
import {useUser,useUserUpdate} from '../provider/userprovider.js'
import {useLang,useLangUpdate} from '../provider/langprovider.js'
function Join(props){
    const [roomId, setroomId]=useState("");
    const setroom=(e)=>
    {
        setroomId(e.target.value);
        console.log(e.target.value);
    }
    const user=useUser();
    const toggleUser=useUserUpdate();
    const lang=useLang();
    const toggleLang=useLangUpdate();
    const [curuser,setcuruser]=useState("");
    function settheuser(e)
    {
        setcuruser(e.target.value);
        console.log(curuser);
    }
    const [curlang,setcurlang]=useState("");
    function setthelang(e)
    {
        setcurlang(e.target.value);
        console.log(curlang);
    }
    const joinRoom = (e) => {
        console.log(user);
        toggleUser(curuser)
        console.log(lang);
        toggleLang(curlang)
        props.history.push("/meeting/" +roomId);
    }
    return (
        <>
            <div class="container">
                <div className="image-container"><img src="../assets/bg-heading-03.jpg" alt="" height="500"/></div>
                <div className="form-container">
                <form className="form">
                    <label>Enter Meeting ID:</label>
                    <div className="meeting-id"><input type="text" name="meeting-id"  onChange={setroom}/></div>
                    <label>Enter Username:</label>
                    <div className="username"><input type="text" name="meeting-id" onChange={settheuser}/></div>
                    <label>Enter Language:</label>
                    <div className="language"><input type="text" name="language" size="15" onChange={setthelang}/></div>
                    <button className="join_meeting" onClick={joinRoom}>JOIN MEETING</button>
                </form>
                </div>
            </div>
            
        </>
    )
}

export default Join;