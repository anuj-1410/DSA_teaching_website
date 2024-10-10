import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css';

export const ContactUs = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4kxoybc', 'template_o7nyczj', form.current, {
        publicKey: 'U7TeVleUHe1Vu4WT_',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setMessageSent(true); // Update the state to show the message sent
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" required />
      <label>Email</label>
      <input type="email" name="user_email" required />
      <label>Message</label>
      <textarea name="message" required />
      <input
        type="submit"
        value={messageSent ? 'Message Sent' : 'Send'}
        
      />
      {messageSent && <p className="confirmation">Message Sent!</p>} {/* Confirmation message */}
    </form>
  );
};
