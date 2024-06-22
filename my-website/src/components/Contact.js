import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Button from 'react-bootstrap/Button';
import styles from '../assets/styles/Contact.module.css';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Contact Me</h1>
      <div className={styles.card}>
        <form className={styles.cardBody} onSubmit={sendEmail}>
          <div className={styles.cardBody}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.cardBody}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.cardBody}>
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className={styles.buttonsContainer}>
          <Button type="submit" variant="outline-light" className="mt-3">
              Send Email
            </Button>
            <Button
              variant="outline-light"
              className="mt-3"
              onClick={() =>
                window.open('https://wa.me/3530879735102', '_blank')
              }
            >
              Send WhatsApp Message
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
