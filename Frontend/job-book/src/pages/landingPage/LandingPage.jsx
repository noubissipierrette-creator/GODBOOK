import React from 'react'
import Header from './compoments/Header'
import Hero from './compoments/Hero'
import Features from './compoments/Features'
import Analystics from './compoments/Analystics'
import Footer from './compoments/Footer'



const LandingPage = () => {
  return (
    <div className='min-h-screen '>
        <Header/>
        <Hero/>
        <Features/>
        <Analystics/>
        <Footer/>
    </div>
  )
}

export default LandingPage