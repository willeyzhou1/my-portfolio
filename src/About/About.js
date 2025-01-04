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
                <img className='selfPortrait' src={hawaiiPic} alt="Me in Hawaii" width="350" height="520"/>
                <div className='resume'>
                    <a className='resumeLink' href='https://drive.google.com/file/d/1yAV4uAZv3lLIbKe8YorMr88vX5c7DyJ_/view?usp=drive_link' target='_blank' rel="noreferrer"></a>
                    <h2>View Resume</h2>
                </div>
            </div>
        </div>
    );
}
