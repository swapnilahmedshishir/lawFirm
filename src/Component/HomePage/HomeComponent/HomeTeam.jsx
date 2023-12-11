// import React from 'react'
import { Link } from 'react-router-dom';
import TeamDate from '../../../FackData/membar.json';
import { IoArrowForward } from "react-icons/io5";
const HomeTeam = () => {
const TeamDates = TeamDate;
console.log();
  return (
    <div className="HomeTeam">
    <div className='container'>
    <div className="patner_text">
      <h1>OUR <span>TEAM</span></h1>
      <p>Explore the robustness and global diversity of our network of member firms. Collaboratively, we provide exceptional services, leveraging collective strengths and expertise. This interconnected alliance ensures that our clients benefit from a comprehensive range of top-tier services, seamlessly delivered across the globe. With each member firm contributing unique insights and capabilities, we create a powerful synergy that exceeds individual capacities.</p>
    </div>
    <div className="patner_card Team_home_card">
      <div className="row">
      <div className='col-md-4 patner_card_col '>
          <div className="HomeTeam_img">
         <img src={TeamDates.membar[1].imgUrl} alt=''/>
         {/* <div className="clearfix"></div> */}
          <h4>{TeamDates.membar[1].name}</h4>
          <p>{TeamDates.membar[1].position}</p>  
          </div>
      </div>    

       <div className='col-md-4 patner_card_col '>
          <div className="HomeTeam_img">
         <img src={TeamDates.membar[2].imgUrl} alt=''/>
         {/* <div className="clearfix"></div> */}
          <h4>{TeamDates.membar[2].name}</h4>
          <p>{TeamDates.membar[2].position}</p>  
          </div>
      </div>    


       <div className='col-md-4 patner_card_col '>
          <div className="HomeTeam_img">
         <img src={TeamDates.membar[3].imgUrl} alt=''/>
         {/* <div className="clearfix"></div> */}
          <h4>{TeamDates.membar[3].name}</h4>
          <p>{TeamDates.membar[3].position}</p>  
          </div>
      </div>      
    
    </div>
          
    </div>
    <div className='btn'>
    <Link to='/our-team'><button type="btn" className="teamBtn">view all <IoArrowForward className="arrowcicon"/></button></Link>

    </div>
    
    </div>
    
  </div>
  )
}

export default HomeTeam
