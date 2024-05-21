// src/components/Contact.js
import React from 'react';
import './contact.css'

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:jalcalaing@gmail.com';
  };

  const handleWhatsAppClick = () => {
    window.location.href = 'https://wa.me/526142426290';
  };

  return (
    <section id="contact">
      <h2>Contacto</h2>
      <p>Email: <span onClick={handleEmailClick} style={{ cursor: 'pointer', color: 'blue' }}>jalcalaing@gmail.com</span></p>
      <p>Whatsapp: <span onClick={handleWhatsAppClick} style={{ cursor: 'pointer', color: 'green' }}>+52 614 242 6290</span></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/jared-alcala-955816195/">linkedin</a></p>
    </section>
  );
};

export default Contact;
