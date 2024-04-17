import React from 'react'
import './Home.css'
import Who from './asset/Who'
import Service from './asset/service/Service'
import WhyChoose from './asset/why/WhyChoose'
import NewsLetter from './asset/newsletter/NewsLetter'


const Home = () => {
  return (
   <>
        <section className="hero-section">
          <h1> Unlock the Power of Technology with IT Solution</h1>
          <h2>Innovative IT solutions tailored to your business needs</h2>
          <p>We provide innovative solutions to enhance your business</p>
          <button className="btn">Learn More</button>
        </section>
     <Service/>
        <Who/>
      <WhyChoose/>
      <NewsLetter/>
   </>
  )
}

export default Home
