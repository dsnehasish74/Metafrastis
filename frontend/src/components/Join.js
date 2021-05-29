import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Join.css'


function Join(){
    return (
        <>
            <div class="container">
                <form>
                    <label>Enter Meeting ID:</label>
                    <div className="meeting-id"><input type="text" name="meeting-id" size="15"/></div>
                    <div className="join"><input type="button" value="JOIN"/></div>
                </form>
            </div>
        </>
    )
}

export default Join;