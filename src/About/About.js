import React from 'react'
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
                    <a className='resumeLink' href='https://drive.google.com/file/d/1zthPdNsDSpeSC3SOdBg7XpnCWSuYtsXb/view?usp=sharing' target='_blank' rel="noreferrer">
                        <h2>View Resume</h2>
                    </a>
                </div>
            </div>
        </div>
    );
}
