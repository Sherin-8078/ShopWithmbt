import React from 'react'
import Hero from '../components/Hero'
import Featured from '../components/Featured'
import WhyChoose from '../components/WhyChoose'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Featured />
      <WhyChoose />
      <Footer />
    </div>
  )
}

export default Home
