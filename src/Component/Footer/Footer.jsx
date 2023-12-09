// import React from 'react'
import { Link } from 'react-router-dom';
import { BsTelephone } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { TbBrandTelegram } from "react-icons/tb";


import './style.css';
const Footer = () => {
  return (
    <div>
      <div className="footer_div">
     <div className='container conatiner_content'>
      <div className='row align-items-center'>
      <div className="col-sm-12 col-md-4 footer_menu">
      <h4>Company Info</h4>
      <p></p>
      <p></p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aperiam veritatis id nesciunt amet odio, officia magnam porro corrupti eveniet deleniti illo neque quod omnis ipsa, iusto adipisci error, expedita nihil reprehenderit quam itaque. Harum, perspiciatis consequatur exercitationem sint molestias totam repellendus earum eaque pariatur quibusdam illum nostrum accusantium veritatis!</p>
    </div>
    <div className="col-sm-6 col-md-2 footer_menu">
      <h4 className='menuHeader'>Legal</h4>
      <ul>
        <li>
          <Link to='/home'>About us</Link>
        </li>
        <li>
        <Link to='/home'>Carrier</Link>
        </li>
        <li>
          <Link to='/home'>We are hiring</Link>
        </li>
        <li>
        <Link to='/home'>Blog</Link>
        </li>
        <li>
        <Link to='/home'>Terms and Conditions </Link>
        </li>
        <li>
        <Link to='/home'>Privacy Policy</Link>
        </li>
        <li>
          <Link to="policy">Cancellation Policy</Link>
        </li>
        </ul>
    </div>
    <div className="col-sm-6 col-md-3 footer_menu">
      <h4 className='menuHeader'>Our Practice Area</h4>
      <ul>
        <li>
          <Link to='/home'>Labour and Employment</Link>
        </li>
        <li>
        <Link to='/home'>Intellectual Property</Link>
        </li>
        <li>
          <Link to='/home'>Commerce Law in Bangladesh</Link>
        </li>
        <li>
        <Link to='/home'>Taxation</Link>
        </li>
        <li>
        <Link to='/home'>Alternative Dispute Resolutions </Link>
        </li>
        <li>
        <Link to='/home'>Family Law in Bangladesh</Link>
        </li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div className="col-sm-6 col-md-3 footer_menu">
      <h4 className='menuHeader'>Get In Touch</h4>
      <ul className="fa-ul">
        <li className="fa-li">
          <a href="tel:+0160255023"> <span><BsTelephone />  +880160255023</span></a>
        </li>
        <li className="fa-li">
       <a href="tel:+880160266023"><span><FiPhone /></span> +8882036524253</a>
        </li>
        <li className="fa-li">
         <span><CiLocationOn /></span>House-39, Road-10, , Court, Dhaka
        </li>
        <li className="fa-li">
        <a href="mailto:info@gmail.com"><span><TbBrandTelegram /></span>info@gamil.com</a>
        </li>
        <li></li>
        <li></li>
        </ul>
    </div>
      </div>
     </div>
    </div>

    <div className='container payment_conatiner'>
      <div className='row'>
      <div className="col-sm-6 col-md-3 footer_menu">
        <p>Copyright goes to <span>Law Firm</span></p>
      </div>
      <div className="col-sm-6 col-md-6 payment_method">
      </div>
      <div className="col-sm-12 col-md-3 footer_menu">
      <p> Development <span>Swapnil Ahmed Shishir</span> </p>
      </div>
      </div>      
     
    </div>

    </div>
  )
}

export default Footer
