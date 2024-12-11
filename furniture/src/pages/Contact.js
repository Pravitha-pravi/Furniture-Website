import React, { useState } from 'react';
import '../index.css';

const Contact = () => {
  // State to manage form input
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // State to handle form submission status
  const [status, setStatus] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation (ensure no field is empty)
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('All fields are required.');
      return;
    }

    // You can replace the following with actual form submission logic like sending data to a server
    console.log('Form submitted:', formData);

    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    setStatus('Thank you for your message!');
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            rows="5"
            required
          />
        </div>
        {status && <p className="status-message">{status}</p>}
      </form>
    </div>
  );
};

export default Contact;
