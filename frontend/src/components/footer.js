import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './footer.css';


function footer(){
    return (
        <>
            <div className="wtf">
            <div className="participants"><img src="../assets/participants.png" width="50" height="50" alt=""/></div>
            <div className="mic"><img src="../assets/mic.png" width="50" height="50" alt=""/></div>
            </div>
        </>
    )
}

export default footer;