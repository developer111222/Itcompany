import React from 'react'
import ContactForm from './form/ContactForm'

const Details = () => {
  return (
    <div className='flex'>
        <div className='left'>
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110917.97163409548!2d76.90602923424703!3d29.685368847628446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e701851e03e97%3A0xf84aa8b9e1cc7607!2sKarnal%2C%20Haryana!5e0!3m2!1sen!2sin!4v1713370872880!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" /> */}
        <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110917.97163409548!2d76.90602923424703!3d29.685368847628446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e701851e03e97%3A0xf84aa8b9e1cc7607!2sKarnal%2C%20Haryana!5e0!3m2!1sen!2sin!4v1713370872880!5m2!1sen!2sin"
              width="100%"
              height="600px"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
        <div className='right'>
            <ContactForm/>
        </div>
    </div>
  )
}

export default Details
