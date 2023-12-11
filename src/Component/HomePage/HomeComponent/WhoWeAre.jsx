// import React from 'react'
import { IoArrowForward,IoSpeedometer } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoIosPeople } from "react-icons/io";
import { SlBookOpen } from "react-icons/sl";
import { MdOutlineSpeed } from "react-icons/md";
const WhoWeAre = () => {
  return (
    <div className="whoWeAre">
      <div className="container">
        <div className="whoweAre_top_text patner_text">
          <h1>Who <span>We Are</span></h1>
          <p>We are a legal powerhouse, offering unmatched expertise and strategic guidance. With a commitment to excellence, our seasoned professionals provide tailored solutions, ensuring success and peace of mind for our clients.</p>
        </div>
        <div className="row patner_text">
          <div className="col-md-6 whoweAre_card_col ">
            <div className="whoweAre_Card">
              <h1>Leading Law Firm in Dhaka, Bangladesh | lawfim</h1>
              <p className="whoweAre_left_colm_text">As a legal powerhouse, we are the embodiment of expertise and commitment. Our identity is rooted in providing unparalleled legal services, transcending traditional boundaries. With a team of seasoned professionals, we navigate the intricate landscape of legal complexities, offering tailored solutions for a myriad of challenges. We pride ourselves on being more than legal advisors; we are strategic partners dedicated to ensuring the success and peace of mind of our clients. At our core, we stand as a beacon of excellence, embodying trust, reliability, and unwavering support in every legal endeavor.</p>
              <Link to='/contact'><button type="btn" className="start_btn">get started <IoArrowForward className="arrowcicon"/></button></Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="whoweAre_Card">
              <h1>legal powerhouse, offering unmatched expertise and strategic guidance</h1>
              <div>
              <div className="cnt_info_text whoWeAre_list">
              <div className="whoWeAre_icon"><span className=""><IoIosPeople /></span></div>
              <div className="whoWeAre_text">
                <h6><span>Proven Expertise: </span>Demonstrating mastery, we navigate legal intricacies with precision, ensuring unparalleled solutions backed by years of experience.</h6>
              </div>
             </div>

             <div className="cnt_info_text whoWeAre_list ">
              <div className="whoWeAre_icon"><span className=""><IoSpeedometer /></span></div>
              <div className="whoWeAre_text">
                <h6><span>Client-Centric Approach: </span>Prioritizing client needs, our solutions are tailored, reflecting a commitment to client success and satisfaction.</h6>
              </div>
             </div>

             <div className="cnt_info_text whoWeAre_list">
              <div className="whoWeAre_icon"><span className=""><MdOutlineSpeed /></span></div>
              <div className="whoWeAre_text">
                <h6><span>Transparent Communication:</span> Fostering open, clear, and honest dialogue, we build trust through transparent communication, keeping clients informed at every step.</h6>
              </div>
             </div>

             <div className="cnt_info_text whoWeAre_list">
              <div className="whoWeAre_icon"><span className=""><SlBookOpen /></span></div>
              <div className="whoWeAre_text">
                <h6><span>Diverse Practice Areas:</span> With wide-ranging legal proficiency, our expertise spans diverse practice areas, offering comprehensive solutions to address multifaceted legal challenges.</h6>
              </div>
             </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhoWeAre
