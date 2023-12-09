// import React from 'react'
import TeamMeet from './member/teamMember';
import './team.style.css';
import './MembarData/membarData.style.css'
const Team = () => {
  return (
     <div>
      <div className="team_hero">
      </div> 
      <div className="container">      
      <div className="team_text">
      <h3>Our Team</h3>      
      <span className="divider"></span>
      </div>    
      
      <div className='team_meet'>
      <TeamMeet/>
      </div>


      <div className="clearfix"></div>
    </div>
    
    </div>
  )
}

export default Team
