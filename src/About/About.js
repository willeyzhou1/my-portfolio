import React, { useEffect, useRef } from 'react'
import './About.css';
import elevatorPic from '../assets/elevatorpic.jpg'

export default function About() {
    const DRIVE_LINK = "https://drive.google.com/file/d/1DKcZAM6S1i7QIGlNVG3xF-kkMy3K-lz3/view?usp=sharing"
    const headerText = "Hi! I'm Willey."
    const headerRef = useRef(null);

    useEffect(() => {
        const target = headerRef.current;
        let i = 0;
        console.log("i am fired once")
        function typeLetters() {
            if(i < headerText.length) {
                target.innerHTML += headerText[i];
                i++;
                setTimeout(typeLetters, 100)
            }
        }
        target.innerHTML = "";

        typeLetters();
    }, []);
    return (
        <div id='about' className='about'>
            <div className='introduction'>
                <div className='bigTitle'>
                    <h1 className='bigHeader' ref={headerRef}></h1>
                </div>
                <img className='selfPortrait' src={elevatorPic} alt="Me in Hawaii" width="380" height="520" loading="lazy"/>
                <div className='resume'>
                    <a className='resumeLink' href={DRIVE_LINK} target='_blank' rel="noreferrer">
                        <h2>View Resume</h2>
                    </a>
                </div>
            </div>
        </div>
    );
}
