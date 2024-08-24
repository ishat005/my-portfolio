import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setName('');
    setEmail('');
    setMessage('');
  
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);
  
    fetch('https://formspree.io/f/xanwlzbg', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setSent(true);
      })
      .catch((error) => console.error(error));
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
          <label>
            Name:
            <input type="text" value={name} onChange={(event) => setName(event.target.value)} required />     
          </label>
          <label>
            Email:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required/>
          </label>
          <label> 
            Message:
          <textarea value={message} onChange={(event) => setMessage(event.target.value)} required/>
          </label>
        <button type="submit">Send</button>
        {sent && <p>Message sent successfully!</p>}
      </form>
    </section>
  );
};

export default Contact;
