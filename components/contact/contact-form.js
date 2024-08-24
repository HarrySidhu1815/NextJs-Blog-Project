import React, { useState } from "react";
import classes from "./contact-form.module.css";

export default function ContactForm() {
  const [enteredEmail, setEnterdEmail] = useState("");
  const [enteredName, setEnterdName] = useState("");
  const [enteredMessage, setEnterdMessage] = useState("");

  function handleSubmitForm(e){
    e.preventDefault()

    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={handleSubmitForm}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              id="email"
              type="email"
              required
              value={enteredEmail}
              onChange={(e) => setEnterdEmail(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              required
              value={enteredName}
              onChange={(e) => setEnterdName(e.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows="5"
            value={enteredMessage}
            onChange={(e) => setEnterdMessage(e.target.value)}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
}
