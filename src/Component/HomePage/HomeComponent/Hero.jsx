import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";



const Hero = () => {
  return (
    <div className="hero">
        <div className="container">
        <div className="row">
         <div className="col-lg-6 col-md-12 col-sm-12 hero_text_col">
            <div>
            <h1>Best Law Firm in Dhaka, Bangladesh for Corporate Legal Services</h1>
            <h5>Welcome to Sweb Coder - Your Beacon of Legal Excellence in Dhaka, Bangladesh! Renowned for our professional prowess and profound understanding of the legal landscape, we stand tall as the premier choice for companies seeking top-tier legal services in Bangladesh.</h5>
            <h2>Committed. Informed. Effective.</h2>
            <Link to='/contact'>
            <button className="hero_text_btn" type="btn">Get in Touch <IoIosArrowRoundForward className="icon"/></button>
            </Link>
            </div>
         </div>
         <div className="col-lg-6 col-md-12 col-sm-12 hero_video_col" >
         <iframe className="video"  src="https://www.youtube.com/embed/AQwIXPbD1VA?si=bjRIz0Bp9vmCdFGL&amp;controls=0&amp;start=5" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
         </div>
      </div>
        </div>
      
    </div>
  )
}

export default Hero
