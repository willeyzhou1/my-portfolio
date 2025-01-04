import React, { Component } from 'react'
import './Contact.css'
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md';

export default function Contact() {
  return (
    <div className='contact' id='contact'>
      <h1>Contact Me!</h1>
      <div className='allSocials'>
          <div className='social linkedin'>
          <a className='link' href='https://www.linkedin.com/in/willey-zhou/' target='_blank' rel="noreferrer">
            <i className='icon'><FaLinkedin /></i>
            <p>Linkedin</p>
          </a>
        </div>
        <div className='social instagram'>
          <a className='link' href='https://www.instagram.com/willeyzhou/' target='_blank' rel="noreferrer">
            <i className='icon'><FaInstagram /></i>
            <p>Instagram</p>
          </a>
        </div>
        <div className='social github'>
          <a className='link' href='https://github.com/willeyzhou1' target='_blank' rel="noreferrer">
            <i className='icon'><FaGithub /></i>
            <p>Github</p>
          </a>
        </div>
        <div className='social email'>
          <a className='link' href='mailto:willzhou000@gmail.com' target='_blank' rel="noreferrer">
            <i className='icon'><MdEmail /></i>
            <p>Email</p>
          </a>
        </div>
      </div>
    </div>
  );
}
