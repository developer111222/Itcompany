import React from 'react';
import { FcAssistant,FcFeedback ,FcHome  } from "react-icons/fc";

const ContactDetails = () => {
  return (
    <div className='flex'>
      <div className='first'>
       <FcAssistant/>
        <h3>Contact Us</h3>
        <p>+91 9728459014</p>
      </div>
      <div className='first'>
      <FcFeedback/>
        <h3>Email</h3>
        <p>anishprajapati765@gmail.com</p>
      </div>
      <div className='first'>
     <FcHome  />
        <h3>Address</h3>
        <p>Karnal</p>
      </div>
    </div>
  )
}

export default ContactDetails
