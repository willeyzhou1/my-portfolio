import React, { Component } from 'react'
import ystemandchess from '../assets/ystemandchess.png'
import acm from '../assets/acm.png'
import { DiReact, DiHtml5, DiCss3, DiJavascript, DiGithub, DiNodejs, DiPython, DiMongodb, DiPostgresql } from "react-icons/di"
import { IoLogoVercel } from "react-icons/io5";
import './Biography.css'
import Icon from '../Components/Icon'

export default class Biography extends Component {
  render() {
    return (
        <div className='biography'>
            <div className='description'>
                <p>I am currently a 4th-year undergraduate student as a Math-CS Major and Cognitive Science Minor at UC San Diego.
                I am a deeply motivated aspiring fullstack software engineer who has experience using:
                </p>
                <div className='slideshow'>
                    <Icon icon={<DiReact />} title='React' />
                    <Icon icon={<DiHtml5 />} title='HTML' />
                    <Icon icon={<DiCss3 />} title='CSS' />
                    <Icon icon={<DiJavascript />} title='Javascript' />
                    <Icon icon={<DiNodejs />} title='Node.js' />
                    <Icon icon={<DiPython />} title='Python' />
                    <Icon icon={<DiMongodb />} title='MongoDB' />
                    <Icon icon={<DiPostgresql />} title='PostgreSQL' />
                    <Icon icon={<DiGithub />} title='Github' />
                    <Icon icon={<IoLogoVercel />} title='Vercel' />
                </div>
                <p>In my free time, I enjoy playing the piano and guitar, playing and watching basketball, and weightlifting.
                    Thank you for stopping by!
                </p>
            </div>

            <hr className='blueBar'></hr>

            <h1 className='experienceTitle'>Relevant Experience</h1>

            <div className='expList'>
                <h2>YStemandChess</h2>
                <h4>Software Engineer Intern</h4>
                <div className='experience'>
                    <img className='expImage YStemAndChess' src={ystemandchess} alt="Me in a garage" width="350" height="130"/>
                    <p>Created methods to add/update user accounts using PostgreSQL and added tests</p>
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