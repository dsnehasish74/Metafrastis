
import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './landing.css'



function Landing(){
    return (
        <>
            <div class="btn-join-meeting">
            <Link to="/join-meeting"><button type="button" class="join-meeting">JOIN MEETING</button></Link>
            </div>

            <div class="btn-join-meeting">
            <Link to="/create"><button type="button" class="join-meeting">CREATE MEETING</button></Link>
            </div>
        </>
    )
}

export default Landing;