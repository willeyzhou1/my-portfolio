import React from 'react';

const Project = ({ title, description, imageSrc, link }) => {
  return (
    <div className='project'>
      <a className='element' href={link} target='_blank' rel='noreferrer'>
        <img src={imageSrc} alt={title} height='200px' width='200px' />
        <div className='text'>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </a>
    </div>
  );
};

export default Project;
