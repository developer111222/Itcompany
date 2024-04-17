import React from 'react'
import Details from './assets/Details'
import ContactDetails from './assets/ContactDetails/ContactDetails'

const Contact = () => {
  return (
    <main className="main-content">
        <div style={{textAlign:"center"}}>
        <h1>Get in Touch with Us</h1>
        <p>Have a question or need assistance? Reach out to us through the form below, and we'll get back to you promptly.
<br/>
We are here to help you with any inquiries regarding our services or to discuss potential collaborations. Let's start a conversation today.</p>
</div>
<ContactDetails/>
<Details/>
        </main>
  )
}

export default Contact
