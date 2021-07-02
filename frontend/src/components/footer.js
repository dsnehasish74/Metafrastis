import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './footer.css';

function Footer(props){
    function disconnect()
    {
        props.history.push("/");
    }
    return (
        <>
            <div className="wtf">
            <div onClick={disconnect} className="leave-call"><img src="../assets/end-call.jpg" width="50" height="50" alt=""/></div>
            </div>
        </>
    )
}

export default Footer;