import React from 'react';

const Project = ({ title, description, imageSrc, webLink }) => {

  return (
    <div className='project'>
      <a className='element' href={webLink} target='_blank' rel='noreferrer'>
        <div className='left-right-container'>
          <div className='text'>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <img className='project-image' src={imageSrc} alt={title} height='100%' width='100%' />
        </div>
      </a>
    </div>
  );
};

export default Project;
