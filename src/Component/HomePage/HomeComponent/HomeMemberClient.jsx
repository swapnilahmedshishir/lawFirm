// import React from 'react'
const HomeMemberClient = () => {
console.log();
  return (
    <div className="member">
    <div className='container'>
    <div className="patner_text">
      <h1>OUR <span>MEMBER FIRM OF</span></h1>
      <p>This interconnected alliance ensures that our clients benefit from a comprehensive range of top-tier services, seamlessly delivered across the globe. With each member firm contributing unique insights and capabilities, we create a powerful synergy that exceeds individual capacities.</p>
    </div>
    {/* Glarry Image */}
    <div className="row">
        <div className="col-md-4 member_firm_img_col">
          <div className="member_firm_img">
            <img src="https://cdn.pixabay.com/photo/2012/04/18/01/19/scales-36417_640.png" alt=""/>
          </div>
        </div>

        <div className="col-md-4 member_firm_img_col">
          <div className="member_firm_img">
            <img src="https://cdn.pixabay.com/photo/2017/01/08/21/58/golden-swing-1964101_640.png" alt=""/>
          </div>
        </div>

        <div className="col-md-4 member_firm_img_col">
          <div className="member_firm_img">
            <img src="https://cdn.pixabay.com/photo/2017/03/19/20/19/ball-2157465_640.png" alt=""/>
          </div>
        </div>
    </div>
    <div className="clearfix"></div>    
    </div>
    
  </div>
  )
}

export default HomeMemberClient
