// import React from 'react'
import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";
const WhoWeAre = () => {
  return (
    <div className="whoWeAre">
      <div className="container">
        <div className="whoweAre_top_text patner_text">
          <h1>Who <span>We Are</span></h1>
          <p>We are a legal powerhouse, offering unmatched expertise and strategic guidance. With a commitment to excellence, our seasoned professionals provide tailored solutions, ensuring success and peace of mind for our clients.</p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div>
              <h1>Leading Law Firm in Dhaka, Bangladesh | lawfim</h1>
              <p>As a legal powerhouse, we are the embodiment of expertise and commitment. Our identity is rooted in providing unparalleled legal services, transcending traditional boundaries. With a team of seasoned professionals, we navigate the intricate landscape of legal complexities, offering tailored solutions for a myriad of challenges. We pride ourselves on being more than legal advisors; we are strategic partners dedicated to ensuring the success and peace of mind of our clients. At our core, we stand as a beacon of excellence, embodying trust, reliability, and unwavering support in every legal endeavor.</p>
              <Link to=''><button type="btn" className="start_btn">get started <IoArrowForward className="arrowcicon"/></button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhoWeAre
