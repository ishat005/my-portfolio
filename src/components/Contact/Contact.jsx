import React from 'react';
import { useForm } from 'react-hook-form';
import './Contact.css';
import  emailIcon  from '../../assets/email.jpg'
import locationIcon from '../../assets/location.png';


const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    alert('Message sent successfully!');
    console.log(data);
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
        <label>
          Name:
          <input type="text" {...register('name', { required: 'Name is required' })} />
          {errors.name && <span className="error">{errors.name.message}</span>}
        </label>
        <label>
          Email:
          <input type="email" {...register('email', { required: 'Email is required' })} />
          {errors.email && <span className="error">{errors.email.message}</span>}
        </label>
        <label>
          Message:
          <textarea {...register('message', { required: 'Message is required' })}></textarea>
          {errors.message && <span className="error">{errors.message.message}</span>}
        </label>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
