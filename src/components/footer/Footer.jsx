import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Mohamed</a>

      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#expeirience">Expeirience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/m0hamed.abrar" rel='noreferrer' target='_blank'><FaFacebook/></a>
        <a href="https://www.instagram.com/mohamed._.abrar/?next=%2F&hl=en" rel='noreferrer' target='_blank'><FiInstagram/></a>
        <a href="https://twitter.com/meddAbrar" rel='noreferrer' target='_blank'><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small><AiOutlineCopyrightCircle className='footer__copyright-icon'/> Mohamed Abrar. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer