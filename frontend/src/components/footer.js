import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './footer.css';


function Footer(){
    return (
        <>
            <div className="wtf">
            <div className="participants"><img src="../assets/participants.png" width="50" height="50" alt=""/></div>
            <div className="leave-call"><img src="../assets/end-call.jpg" width="50" height="50" alt=""/></div>
            <div className="mic"><img src="../assets/mic.png" width="50" height="50" alt=""/></div>
            </div>
        </>
    )
}

export default Footer;