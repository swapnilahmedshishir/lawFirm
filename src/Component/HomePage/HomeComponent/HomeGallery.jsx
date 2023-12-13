import MasonryGallery from "../../Gallery/ImageGellery/ImgGellery";

// import React from 'react'
const HomeGallery = () => {
console.log();
  return (
    <div className="Gallery">
    <div className='container'>
    <div className="patner_text">
      <h1>OUR <span>GALLARY</span></h1>
      <p>This interconnected alliance ensures that our clients benefit from a comprehensive range of top-tier services, seamlessly delivered across the globe. With each member firm contributing unique insights and capabilities, we create a powerful synergy that exceeds individual capacities.</p>
    </div>
    {/* Glarry Image */}
    <MasonryGallery/>
    <div className="clearfix"></div>    
    </div>
    
  </div>
  )
}

export default HomeGallery
