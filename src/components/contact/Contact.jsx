import React, { useRef } from "react";
import { MdAlternateEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import "./contact.css";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_zu9zy4h",
      "template_4sprkkp",
      form.current,
      "UjSh39HG3swenFUkS"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdAlternateEmail size={"25px"} />
            <h4>Email</h4>
            <h5>ladisgodo13@gmail.com</h5>
            <a
              href="mailto:ladisgodo13@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <AiOutlineLinkedin size={"25px"} />
            <h4>Linkedin</h4>
            <h5>Ladislao Godocik</h5>
            <a
              href="https://www.linkedin.com/in/ladislaogodocik/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp size={"25px"} />
            <h4>Whatsapp</h4>
            <h5>+54 341 615-3068</h5>
            <a
              href="https://wa.me/543416153068"
              rel="noopener noreferrer"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
