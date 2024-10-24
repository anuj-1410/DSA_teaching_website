import React, { useState } from 'react';
import './AboutUs.css'; 
import { ContactUs } from './ContactUs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import '@lottiefiles/lottie-player';

const AboutUs = () => {
  const [messageSent, setMessageSent] = useState(false);

  const handleSendMessage = () => {
    setMessageSent(true);
    setTimeout(() => {
      setMessageSent(false);
    }, 3000);
  };

  return (
    <div className='mainmaincontainer'>
    <div className='main-container'>
      <div className="about-us-section">
        <div className="about-us-heading">About Us</div>
        <div className="educate-line">• EDUCATE • ENABLE • EMPOWER</div>
        <div className='content'>
          <p>
            We are passionate about empowering individuals with the knowledge and skills needed to excel 
            in programming and computer science. Our mission is to provide accessible, high-quality education
            in Data Structures and Algorithms.
          </p>
          <p>
            We invite you to explore our resources and join our community. Together, let’s embark on the journey 
            to mastering Data Structures and Algorithms! Thank you for being a part of our mission to democratize 
            education in computer science.
          </p>
        </div>
        <div className='team'>
          <p>Meet Our Team:</p>
          <p>1. Abhishek Shrivastav (5)</p>
          <p>2. Anshul Parate(14)</p>
          <p>3. Anuj Agrawal (16)</p>
          <p>4. Aryan Patel (20)</p>
          <p>5. Deepanshu Nanure (35)</p>
        </div>
        <div className='teamlottie'>
          <lottie-player 
            src='https://lottie.host/9132b1e8-ac9b-4ef6-b55c-9db536b8a0d3/8Be62FQ0Oe.json'
            className='player'
            autoplay
            loop
            speed={1}
            style={{ width: '450px', height: '450px' }}
          ></lottie-player>
        </div>
      </div>

      <div className="contactus-section">
        <div className="contactus-header">
          <div className="contactus-heading">Contact Us</div>
          <lottie-player 
            src='https://lottie.host/da054100-d69e-491f-b0fd-685d9ae92e11/NIcwowHAq3.json'
            className='player'
            autoplay
            loop
            speed={1}
            style={{ width: '60px', height: '60px' }}
          ></lottie-player>
        </div>
        
        <ContactUs onSendMessage={handleSendMessage} />

        {messageSent && <div className='confirmation-message'>Message Sent</div>}

        <div className='contact-info'>
          <div className='contact-row'>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> 
            <a href="https://maps.app.goo.gl/NpKtgtKwQR3iETRW7" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', marginLeft: '5px' }}>
              Address: Shri Ramdeobaba College of Engineering and Management, Katol Rd, Lonand, Gittikhadan, Nagpur, Maharashtra 440013, India
            </a>
          </div>
          <div className='contact-row'>
            <FontAwesomeIcon icon={faPhone} /> 
            <span style={{ marginLeft: '5px' }}>Phone: 1400-2344</span>
          </div>
          <div className='contact-row'>
            For media inquiries, email us at 
            <a href="mailto:codematrix.rbu@gmail.com" style={{ marginLeft: '5px', fontWeight: 'bold' }}>
              codematrix.rbu@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;