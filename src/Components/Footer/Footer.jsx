import React from 'react'
import "./footer.css"
import { SiChinaeasternairlines } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa6";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className= "footer">
      <div className="secContainer grid">
        <div className="logoDiv">
          <div className="footerLogo">
            <a href="#" className="logo flex">
              <h1 className='flex'><SiChinaeasternairlines className='icon' />
                QAirline</h1>
            </a>
          </div>

          <div className="socials flex">
            <FaFacebookF className="icon" />
            <BsTwitter className="icon" />
            <AiFillInstagram className="icon" />
          </div>
        </div>

        

        <div className="footerLinks">
          <span className="linkTitle">
            Information
          </span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Travel</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">
            Helpful Links
          </span>
          <li>
            <a href="#">Destination</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Travel</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">
            Contact us
          </span>
          <span className='phone'>+84383161142</span>
          <span className='email'>nguyenduyen.260903@gmail.com</span>
        </div>

        
      </div>
    </div>
  )
}

export default Footer
