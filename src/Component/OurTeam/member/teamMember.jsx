// import React from 'react'
import './teamMember.css';
import { FaFacebookSquare, FaLinkedin,FaWhatsapp,FaYoutube  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import FackData from '../../../FackData/membar.json';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const TeamMeet = () => {
const fackData = FackData;
const [data ] = useState(fackData.membar)

  return (  
    
    <div className="row">
        {
            data.map((dt) => {
                return(
                   
             <div className="col-md-3 col-sm-6 team_colum" key={dt.id}>
             
                        <div className="our-team">
                <img src={dt.imgUrl} alt=""/>
                <div className="team-content">
                <Link className='title_name' to={`/team/${dt.id}/${dt.title}`} >
                  <h3 className="title">{dt.name}</h3>
                  </Link>
                    <span className="team_post">{dt.position}</span>
                    <ul className="social-links">
                        <li><a href="https://www.facebook.com/" target='_blank'><FaFacebookSquare /></a></li>
                        <li><a href="https://www.linkedin.com/" target='_blank'><FaLinkedin/></a></li>
                        <li><a href="https://www.twitter.com/" target='_blank'><FaXTwitter/> </a></li>
                        <li><a href="https://www.whatsapp.com/" target='_blank'><FaWhatsapp /> </a></li>
                        <li><a href="https://www.youtube.com/" target='_blank'><FaYoutube /></a></li>
                    </ul>
                </div>
            </div>
          
        </div>
                )
            })
        }      

    </div>

  )
}

export default TeamMeet
