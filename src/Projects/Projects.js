import React, { useState, useEffect } from 'react'
import './Projects.css';
import Project from '../Components/Project.js'
import projectData from './projectData'

export default function Projects() {

  const getProjects = (projectData) => {
    return projectData.map((project, index) => (
      <Project 
        key={index}
        title={project.title}
        description={project.description}
        imageSrc={project.imageSrc}
        webLink={project.webLink}
        technologies={project.technologies}
      />
    ));
  };
  
  return (
    <div className='pages' id='projects'>
      <h1>Projects</h1>
      <h2 className='subheading'>These are some of the projects that I have completed :D</h2>
      <div className='projects'>
        {getProjects(projectData)}
        <hr className='blueBar'></hr>
      </div>
    </div>
  )
}

/**
 * <Project
            title="Habitizer"
            description="Collaborated with group members to create a mobile app that allows users to create and keep track of routines"
            imageSrc={routine}
            link="https://github.com/willeyzhou1/Habitizer"
          />
 */