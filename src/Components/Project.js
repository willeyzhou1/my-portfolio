import React from 'react';

const getTechnologies = (technologies) =>
  technologies.map((technology, index) => (
    <p className='technology' key={index}>{technology}</p>
  ));

const Project = ({ title, description, imageSrc, webLink, technologies }) => {

  return (
    <div className='project'>
      <a className='element' href={webLink} target='_blank' rel='noreferrer'>
        <div className='left-right-container'>
          <div className='text'>
            <h2>{title}</h2>
            <p className='project-description'>{description}</p>
            <div className='technology-container'>
              {getTechnologies(technologies)}
            </div>
          </div>
          <img className='project-image' src={imageSrc} alt={title} height='100%' width='100%' />
        </div>
      </a>
    </div>
  );
};

export default Project;

/**
 * <Project 
        key={index}
        title={project.title}
        description={project.description}
        imageSrc={project.imageSrc}
        webLink={project.webLink}
      />
 */