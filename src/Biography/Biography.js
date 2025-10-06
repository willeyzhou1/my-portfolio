import React, { Component } from 'react'
import ystemandchess from '../assets/ystemandchess.png'
import acm from '../assets/acm.png'
import { DiReact, DiHtml5, DiCss3, DiJavascript, DiGithub, DiNodejs, DiPython, DiPostgresql, DiJava, DiFirebase } from "react-icons/di"
import { IoLogoVercel } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri"
import { MdArrowRightAlt } from "react-icons/md";

import './Biography.css'
import Icon from '../Components/Icon'

export default class Biography extends Component {
  render() {
    return (
        <div className='biography'>
            <div className='description'>
                <p>I am a recent Math-Computer Science Major and Cognitive Science Minor graduate at UC San Diego.
                I am a deeply motivated software engineer with experience in:
                </p>
                <div className='slideshow'>
                    <div className='hoverContainer'>
                        <p>Hover!</p>
                        <i><MdArrowRightAlt /></i>
                    </div>
                    <Icon icon={<DiReact />} title='React' />
                    <Icon icon={<DiHtml5 />} title='HTML' />
                    <Icon icon={<DiCss3 />} title='CSS' />
                    <Icon icon={<RiTailwindCssFill />} title='TailwindCSS' />
                    <Icon icon={<DiJavascript />} title='JavaScript' />
                    <Icon icon={<DiJava />} title='Java' />
                    <Icon icon={<DiNodejs />} title='Node.js' />
                    <Icon icon={<DiPython />} title='Python' />
                    <Icon icon={<DiPostgresql />} title='PostgreSQL' />
                    <Icon icon={<DiGithub />} title='Github' />
                    <Icon icon={<IoLogoVercel />} title='Vercel' />
                    <Icon icon={<DiFirebase />} title='Firebase' />
                </div>
                <p>I am currently looking for full time opportunities in software engineering, primarily fullstack and web development. Thanks for visiting :D</p>
            </div>
            <hr className='blueBar'></hr>
            <h1 className='experienceTitle'>Relevant Experience</h1>
            <div className='expList'>
                <h2>YStemandChess</h2>
                <h4>Software Engineer Intern</h4>
                <div className='experience'>
                    <img className='expImage YStemAndChess' src={ystemandchess} alt="Me in a garage" width="350" height="130"/>
                    <p>Created methods to add/update user accounts using PostgreSQL and added tests; designed chess lessons page using HTML/CSS</p>
                </div>
                <h2>ACM at UCSD</h2>
                <h4>Frontend Developer</h4>
                <div className='experience ACM'>
                    <p>Worked in a group of five other members as a frontend developer and presented to 100+ people in a school-wide conference</p>
                    <img className='expImage' src={acm} alt="ACM logo" width="140" height="140"/>
                </div>
            </div>

            <hr className='blueBar'></hr>
        </div>
        );
        
  }
}