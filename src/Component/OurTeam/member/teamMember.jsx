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
console.log(data[2]);

  return (  
    
    <div className="row">
        {
            data.map((dt) => {
                return(
                   
             <div className="col-md-3 col-sm-6 team_colum" key={dt.id}>
             <Link to={`/team/${dt.id}/${dt.title}`} >
                        <div className="our-team">
                <img src={dt.imgUrl} alt=""/>
                <div className="team-content">
                    <h3 className="title">{dt.name}</h3>
                    <span className="post">{dt.position}</span>
                    <ul className="social-links">
                        <li><a href="#"><FaFacebookSquare /></a></li>
                        <li><a href="#"><FaLinkedin/></a></li>
                        <li><a href="#"><FaXTwitter/> </a></li>
                        <li><a href="#"><FaWhatsapp /> </a></li>
                        <li><a href="#"><FaYoutube /></a></li>
                    </ul>
                </div>
            </div>
          </Link>
        </div>
                )
            })
        }      

    </div>

  )
}

export default TeamMeet
