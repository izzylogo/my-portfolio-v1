import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-container">
        <div className="contact-header">
          <h1>What to get in touch?</h1>
          <p>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible.</p>
        </div>
        <div className="contact-form">
          <form method='POST' action='https://getform.io/f/8c64d716-ebfa-444d-bc06-b32b8d6adfe5'>
            <div className="send-det">
              <div className="name am">
                <label htmlFor="name">Your Name</label>
                <input type="text" name='name' id='name' placeholder='Enter Your Name' required />
              </div>
              <div className="email am">
                <label htmlFor="email">Email Address</label>
                <input type='email' name='email' id='email' placeholder='Enter Your Email Address' required />
              </div>
            </div>
            <div className="message am">
              <label htmlFor="message">Your Message</label>
              <textarea name="message" id="message" cols="10" placeholder='Enter Your Message'></textarea>
            </div>
            <button className="send">
              Deliver Message
              <div className="arrow">
                <div className="lin1 lin bent"></div>
                <div className="lin2 lin"></div>
                <div className="lin3 lin bent"></div>
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact