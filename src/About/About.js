import React, { useState, useEffect } from 'react'
import './About.css';
import hawaiiPic from '../assets/hawaiipic.jpg'

export default function About() {
    return (
        <div id='about' className='about'>
            <div className='introduction'>
                <div className='bigTitle'>
                    <h1>Hi! I'm Willey.</h1>
                </div>
                <img className='selfPortrait' src={hawaiiPic} alt="Me in a garage" width="350" height="520"/>
            </div>
        </div>
    );
}
