import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Create.css'


function Create(){
    return (
        <>
            <div class="container">
                <form>
                    <label>Enter UserName:</label>
                    <div className="User Name"><input type="text" name="user-name" size="15"/></div>
                    <div className="invite"><input type="button" value="INVITE"/></div>
                </form>
            </div>
        </>
    )
}

export default Create;