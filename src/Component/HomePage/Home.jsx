// import React from 'react'
import CilentArea from './HomeComponent/CilentArea'
import Hero from './HomeComponent/Hero'
import About from './HomeComponent/About'
import './Style.css'
import Partner from './HomeComponent/Partner'
function Home() {
  return (
    <div className='Homepage'>
      <Hero/>
      <CilentArea/>
      <About/>
      <Partner/>
    </div>
  )
}

export default Home
