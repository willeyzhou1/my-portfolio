import React from 'react'
import './About.css';
import elevatorPic from '../assets/elevatorpic.jpg'

export default function About() {
    const DRIVE_LINK = "https://drive.google.com/file/d/1lrEgtWeXHLAGPFgqBM8NHcujKrzq2XpW/view?usp=sharing"
    return (
        <div id='about' className='about'>
            <div className='introduction'>
                <div className='bigTitle'>
                    <h1>Hi! I'm Willey.</h1>
                </div>
                <img className='selfPortrait' src={elevatorPic} alt="Me in Hawaii" width="380" height="520"/>
                <div className='resume'>
                    <a className='resumeLink' href={DRIVE_LINK} target='_blank' rel="noreferrer">
                        <h2>View Resume</h2>
                    </a>
                </div>
            </div>
        </div>
    );
}
