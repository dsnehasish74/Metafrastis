import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Create.css'
import { v4 as uuidv4 } from 'uuid';
function Create(props){
    const createRoom = () => {
        let roomId = uuidv4();
        props.history.push("/meeting/" +roomId);
    }
    return (
        <>
            <div class="container">
                <form>
                    <label>Enter Username:</label>
                    <div className="username"><input type="text" name="meeting-id" size="15"/></div>
                    <button className="create_meeting" onClick={createRoom}>CREATE MEETING</button>
                </form>
            </div>
        </>
    )
}

export default Create;