import React from 'react'
import './About.css';
import hawaiiPic from '../assets/hawaiipic.jpg'

export default function About() {
    const DRIVE_LINK = "https://drive.google.com/file/d/1wxUlYoA_V8h74J2_QBSWGOIR-NonXQW-/view?usp=sharing"
    return (
        <div id='about' className='about'>
            <div className='introduction'>
                <div className='bigTitle'>
                    <h1>Hi! I'm Willey.</h1>
                </div>
                <img className='selfPortrait' src={hawaiiPic} alt="Me in Hawaii" width="350" height="520"/>
                <div className='resume'>
                    <a className='resumeLink' href={DRIVE_LINK} target='_blank' rel="noreferrer">
                        <h2>View Resume</h2>
                    </a>
                </div>
            </div>
        </div>
    );
}
