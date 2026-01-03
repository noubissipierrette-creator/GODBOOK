import React from 'react'
import Header from './compoments/Header'
import Hero from './compoments/Hero'
import Features from './compoments/Features'
import Analytics from './compoments/Analytics'


const LandingPage = () => {
  return (
    <div className='min-h-screen mb-[100vh]'>
        <Header/>
        <Hero/>
        <Features/>
        <Analytics/>
    </div>
  )
}

export default LandingPage