import React from 'react'
import Team from './assets/Team/Team'
import Achievement from './assets/Team/Achievment/Achievement'

const About = () => {
  return (
    <main className="main-content">
        <div>
        <h1 style={{fontWeight:"600"}}>We're on a mission to make the webbeautiful and accessible for all.</h1>
      <p>
      Our team is passionate about creating tools that empower developers to build amazing web experiences. We believe theweb should be fast, reliable, and delightful for users. That's why we're dedicated to providing the platform and workflowsthat help teams ship high-quality sites and apps.
</p>
<p>
Whether it's enabling Jamstack architecture, automating the deployment process, or delivering the best web performance,we are committed to innovation. With a focus on collaboration, simplicity, and modern web technologies, we're reimagining the developer experience. Let's build the future of the web together.
      </p>
      <p>   Our mission is to empower businesses with innovative software solutions 
        that drive growth and efficiency. We specialize in web development, 
        mobile app development, cloud services, and IT consulting.At Tech Innovators, we believe in the power of technology to transform 
        businesses and make a positive impact on society. Our core values of 
        integrity, innovation, and excellence guide us in every project we undertake.</p>
      
    </div>
    <Team/>
    <Achievement/>
        </main>
  )
}

export default About
