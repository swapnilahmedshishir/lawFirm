// import React from 'react'
import CilentArea from './HomeComponent/CilentArea'
import Hero from './HomeComponent/Hero'
import About from './HomeComponent/About'
import './Style.css'
import Partner from './HomeComponent/Partner'
import Practice from './HomeComponent/Practice'
import WhoWeAre from './HomeComponent/WhoWeAre'
function Home() {
  return (
    <div className='Homepage'>
      <Hero/>
      <CilentArea/>
      <About/>
      <Partner/>
      <Practice/>
      <WhoWeAre/>
    </div>
  )
}

export default Home
