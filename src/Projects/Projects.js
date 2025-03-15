import React, { Component } from 'react'
import './Projects.css';
import Project from '../Components/Project.js'
import acm from '../assets/acm.png'
import barChart from '../assets/barchart.png'
import website from '../assets/website.webp'
import routine from '../assets/routine.png'

export default class Projects extends Component {
  render() {
    return (
      <div className='pages' id='projects'>
        <h1>Projects</h1>
        <h2 className='subheading'>These are some of the projects that I have completed :D</h2>
        <div className='projects'>
          <Project
            title="Eventify"
            description="Created a website that allows for 1000+ students to advertise events happening on campus; worked as a frontend developer"
            imageSrc={acm}
            link="https://github.com/willeyzhou1/eventify"
          />
          <Project
            title="Habitizer"
            description="Collaborated with group members to create a mobile app that allows users to create and keep track of routines"
            imageSrc={routine}
            link="https://github.com/willeyzhou1/Habitizer"
          />
          <Project
            title="Real Estate and Remote Work Analysis"
            description="Utilized Python and Pandas in order to track trends between real estate demands and remote work"
            imageSrc={barChart}
            link="https://github.com/willeyzhou1/Real-Estate-and-Remote-Work-Analysis"
          />
          <Project
            title="Portfolio Website"
            description="Coded website using React; utilized HTML/CSS to create creative designs and transitions"
            imageSrc={website}
            link="https://github.com/willeyzhou1/my-portfolio"
          />
          <hr className='blueBar'></hr>
        </div>
      </div>
    )
  }
}
