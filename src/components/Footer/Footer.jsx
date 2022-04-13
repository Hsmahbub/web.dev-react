/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import {FaFacebookSquare,FaTwitterSquare,FaLinkedin} from 'react-icons/fa'
import{BiRightArrowCircle} from 'react-icons/bi'


function Footer() {
  return (
    <div className='section__padding'>
      <div className="footer">
        <div className="footer__title">
          <p>Need a little more <br /> home to grow?</p>
          <button className='btn custom_btn'>Contact Us</button>
        </div>
    <div className="footer_links">
      <div className="inner_footer_links">
        <div className="footer_box">
          <h2>Web.Dev</h2>
          <p>You’ll find your next home loan <br /> valu you prefer.</p>
          <div className="social_links">
            <FaFacebookSquare className='fb'/>
            <FaTwitterSquare className='tt'/>
            <FaLinkedin className='ln'/>
          </div>
        </div>
        <div className="footer_box">
          <h3>Resource</h3>
        <p><a href="#">Our Agents</a></p>
        <p><a href="#">Member Stories</a></p>
        <p><a href="#">Video</a></p>
        <p><a href="#">Free trial</a></p>
        </div>
        <div className="footer_box">
        <h3>Company</h3>
        <p><a href="#">Patnerships</a></p>
        <p><a href="#">Terms of use</a></p>
        <p><a href="#">Privacy</a></p>
        <p><a href="#">Sitemap</a></p>
        </div>
        <div className="footer_box get-in-touch">
        <h3>Get in touch</h3>
        <div className='input'>
          <input type="mail" placeholder='Enter your mail' /><BiRightArrowCircle className='icon'/>
        </div>
        </div>
      </div>
    </div>
    <p className='copyRight'>Md Mahbub Alom &copy; copyright 2022</p>
      </div>
    </div>
  )
}

export default Footer