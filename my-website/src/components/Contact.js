import React, { useState } from "react";
import { Helmet } from "react-helmet";
import emailjs from "emailjs-com";
import { Button } from "react-bootstrap";
import EmailAlert from "../utils/EmailAlert";
import styles from "../assets/styles/Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [notification, setNotification] = useState({ message: "", type: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_USER_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setNotification({
            message: "Email sent successfully!",
            type: "success",
          });
        },
        (error) => {
          console.log(error.text);
          setNotification({
            message: "Failed to send email. Please try again later.",
            type: "danger",
          });
        }
      );

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const clearNotification = () => {
    setNotification({ message: "", type: "" });
  };

  return (
    <div className={styles.container}>
      <Helmet>
        <link rel="canonical" href="https://www.thomasdomitrovic.com/contact" />
      </Helmet>
      <h1 className={styles.h1}>Contact Me</h1>

      <div className={styles.whatsappContainer}>
        <h2 className={styles.h2}>Let's Connect on WhatsApp</h2>
        <p className={styles.whatsappMessage}>
          Send me a message on WhatsApp to get in touch. I'm ready to
          collaborate!
        </p>
        <Button
          variant="outline-success"
          className={styles.buttonwhap}
          onClick={() => window.open("https://wa.me/3530879735102", "_blank")}
        >
          Send WhatsApp Message
        </Button>
      </div>

      <div className={styles.emailContainer}>
        <h2 className={styles.h2}>Send me an Email</h2>
        <EmailAlert
          notification={notification}
          clearNotification={clearNotification}
        />
        <div className={styles.card}>
          <form className={styles.cardBody} onSubmit={sendEmail}>
            <div className={styles.formGroup}>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.inputField}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.inputField}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={styles.textareaField}
                required
              ></textarea>
            </div>
            <div className={styles.buttonsContainer}>
              <Button
                type="submit"
                variant="outline-light"
                className={`${styles.button} ${styles.submitButton}`}
              >
                Send Email
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
