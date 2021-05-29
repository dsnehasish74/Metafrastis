
import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './landing.css'



function Landing(){
    return (
        <>
        
            <div className="speech">
            <div class="btn-join-meeting">
            <Link to="/join-meeting"><button type="button" class="join-meeting">JOIN MEETING</button></Link>
            
            <Link to="/create-meeting"><button type="button" class="join-meeting">CREATE MEETING</button></Link>
            </div>
            </div>
            
        </>
    )
}

export default Landing;