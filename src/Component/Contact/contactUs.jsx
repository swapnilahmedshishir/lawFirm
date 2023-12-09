// import React from 'react'
import "./ContactStyle.css"
import From from "./From/From"
import { IoIosMail } from "react-icons/io";
import { BsTelephone,BsFacebook,BsInstagram,BsYoutube,BsWhatsapp } from "react-icons/bs";
import { GiRotaryPhone } from "react-icons/gi";
import Map from "./GoogleMap/Map";

export const ContactUs = () => {
  return (
    <div>
      <div className="container contact_style">
        {/* header hero text */}
        <div>
          <div className="contact_text">
            <span></span>
          <h4>CONTACT</h4>
          <span></span>
          </div>
          <h2 className="contact_touch">LET<span>&apos;</span>S GET IN TOUCH</h2>
        </div>

        {/* contact us input filed  */}
        <div className="background_overlay">         
        <div className="row">
          <div className="col-lg-8">
            <div className="divider_border">
              <span></span>
              <h3>MESSAGE</h3>
            </div>
            <div>
            <From/>
            </div>
            {/* <span className="divider_horizontal"></span> */}
          </div>
          <div className="col-lg-4 contact_info">
            <div className="contact_info_text">
              <div className="divider_border">
                <span></span>
                <h3>our contact</h3>
             </div>
             <div className="cnt_info_text">
              <div className="cnt_info_frist_div"><span className=""><IoIosMail /></span></div>
              <div className="cnt_info_second_div">
                <h6><a href="mailto:info@gmail.com">Email Address</a></h6>
                <span>info@gmail.com</span>
              </div>
             </div>

             <div className="cnt_info_text">
              <div className="cnt_info_frist_div"><span className=""><BsTelephone /></span></div>
              <div className="cnt_info_second_div">
                <h6><a href="tel:+8880XYVJHJHU">Call Us</a></h6>
                <span>+8801236547896</span>
              </div>
             </div>

             <div className="cnt_info_text">
              <div className="cnt_info_frist_div"><span className=""><GiRotaryPhone /></span></div>
              <div className="cnt_info_second_div">
              <h6><a href="tel:+8880XYVJHJHU">Call Us</a></h6>
                <span>+8801236547896</span>
              </div>
             </div>
              <div className="social_media">
              <div className="divider_border">
                <span></span>
                <h3>social media</h3>
              </div>
              <div className="social-container">
                <ul className="social-icons">
                    <li><a href="https://www.facebook.com"  rel="noopener" target="_blank"><span><BsFacebook/></span></a></li>
                    <li><a href="https://www.instagram.con"  rel="noopener" target="_blank"><span><BsInstagram/></span></a></li>
                    <li><a href="https://www.youtube.com/" rel="noopener" target="_blank"><span><BsYoutube/></span></a></li>
                    <li><a href="whatsapp.com" target="_blank"><span><BsWhatsapp/></span></a></li>
                </ul>
            </div>
              </div>
            </div>            
          </div>
        </div>
        </div>
        {/* location  */}
        <div className="background_overlay location_div">
          <div className="row">
          <div className="col-lg-8">
            <div className="divider_border">
              <span></span>
              <h3>LOCATION</h3>
            </div>
            <div className="location">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, a!</p>
              <Map/>
            </div>
            {/* <span className="divider_horizontal"></span> */}
          </div>

          <div className="col-lg-4">
           
          </div>
          </div>
        </div>

      </div>
    </div>
  )
}
