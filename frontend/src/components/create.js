import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Create.css'
import {useUser,useUserUpdate} from '../provider/userprovider.js'
import {useLang,useLangUpdate} from '../provider/langprovider.js'
import { v4 as uuidv4 } from 'uuid';
function Create(props){
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
    const createRoom = (e) => {
        let roomId = uuidv4();
        console.log(user);
        toggleUser(curuser)
        console.log(lang);
        toggleLang(curlang)
        props.history.push("/meeting/" +roomId);
    }
    return (
        <>
            <div class="container">
                <form>
                    <label>Enter Username:</label>
                    <div className="username"><input type="text" name="meeting-id" size="15" onChange={settheuser}/></div>
                    <label>Enter Language:</label>
                    <div className="language"><input type="text" name="language" size="15" onChange={setthelang}/></div>
                    <button className="create_meeting" onClick={createRoom}>CREATE MEETING</button>
                </form>
            </div>
        </>
    )
}

export default Create;