import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { StyledContactForm } from "../styles/sections/ContactForm.styled";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_API_ID,
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message sent");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        },
      );
  };
  return (
    <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <label for="user_name">Name</label>
        <input type="text" name="user_name" id="user_name" />
        <label for="user_email">Email</label>
        <input type="email" name="user_email" id="user_email" />
        <label for="message">Message</label>
        <textarea name="message" id="message" />
        <input type="submit" value="Send" />
      </form>
    </StyledContactForm>
  );
};

export default ContactForm;
