// import React from 'react'
// import { useEffect, useState } from "react";
import "./Gallary.css";
import MasonryGallery from "./ImageGellery/ImgGellery";
const Gallery = () => {    

  return (
    <div>
      <div className="Gallery_hero">
      </div> 
      <div className="container">      
      <div className="gallary_text">
      <h3>Gallery</h3>      
      <span className="divider"></span>
      
      </div>    
      
      {/* Glarry Image */}
     <MasonryGallery/>
      <div className="clearfix"></div>
    </div>
    
    </div>
  )
}

export default Gallery
