// import React from 'react'
import { useParams } from "react-router";
import  FackData  from "../../../FackData/membar.json";
import { useEffect, useState } from "react";
const MemberDetais = () => {
  const {title ,id} = useParams()
  const FacData = FackData;

  const [data ] = useState(FacData);
  const [memberData , setMemberData] = useState([]);

  useEffect(() => {
    const matchData = data.membar.filter(
      (dt) => dt.id === id 
      );
      setMemberData(matchData)
  },[title])

   // Check if post[0] exists before accessing its properties
   const name = memberData[0]?.name;
   const imageUrl = memberData[0]?.imgUrl;
   const position = memberData[0]?.position;
   const bio1 = memberData[0]?.bio1;
   const bio2 = memberData[0]?.bio2;
   const bio3 = memberData[0]?.bio3;

  return (
    <div className='container membarData_div'>
    <div className='row member_row'>
      <div className='col-md-4 col-sm-12 member_img_col'>
      <img src={imageUrl} alt=""/>
      </div>
      <div className='col-md-8 col-sm-12 member_text_col'>
        <h1>{name}</h1>
        <p className='position'>Position: <span>{position}</span></p>
        <hr/>
        <p>{bio1}</p>
        <p>{bio2}</p>
        <p>{bio3}</p>
      </div>

    </div>
    
    </div>
  )
}

export default MemberDetais
