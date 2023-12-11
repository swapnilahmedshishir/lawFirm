// import React from 'react'
import CilentArea from './HomeComponent/CilentArea'
import Hero from './HomeComponent/Hero'
import About from './HomeComponent/About'
import './Style.css'
import Partner from './HomeComponent/Partner'
import Practice from './HomeComponent/Practice'
import WhoWeAre from './HomeComponent/WhoWeAre'
import HomeTeam from './HomeComponent/HomeTeam'
import HomeGallery from './HomeComponent/HomeGallery'
import HomeCertificate from './HomeComponent/HomeCertificate'
import HomeMemberClient from './HomeComponent/HomeMemberClient'
import HomePopularBlog from './HomeComponent/HomePopularBlog'
import Faq from './HomeComponent/Faq'
function Home() {
  return (
    <div className='Homepage'>
      <Hero/>
      <CilentArea/>
      <About/>
      <Partner/>
      <Practice/>
      <WhoWeAre/>
      <HomeTeam/>
      <HomeGallery/>
      <HomeCertificate/>
      <HomeMemberClient/>
      <HomePopularBlog/>
      <Faq/>
    </div>
  )
}

export default Home
