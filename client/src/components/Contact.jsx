import React from 'react';
import '../styles/contact.css';
import contactData from './data/contactData.jsx';
import logo from '../assets/JB-logo-white.png'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='title'>
        <h1>Let's Connect!</h1>
      </div>
      <div className='main-content'>
        <div className='content'>
            {
                contactData.map((data, index) => {
                    return (
                        <a key={index} href={data.link} target={data.target} className='contact-data'>
                            <span>{data.svg}</span>
                            <p>{data.value}</p>
                        </a>
                    )
                })
            }
        </div>
        <div className='logo-div'>
            <span><img src={logo} alt="logo" /></span>
        </div>
      </div>
    </div>
  )
}

export default Contact
