import React, { useEffect, useState } from "react";
import classes from "./contact-form.module.css";
import Notification from "../ui/notification";

async function sendFetchRequest(contactData){
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactData),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const data = await response.json()

  if(!response.ok){
    throw new Error(data.message)
  }
}

export default function ContactForm() {
  const [enteredEmail, setEnterdEmail] = useState("");
  const [enteredName, setEnterdName] = useState("");
  const [enteredMessage, setEnterdMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState()
  const [requestError, setRequestError] = useState()

  useEffect(()=> {

    if(requestStatus === 'success' || requestStatus === 'error'){
      const timer = setTimeout(()=> {
        setRequestError(null)
        setRequestStatus(null)
      }, 3000)

      return ()=> {
        clearTimeout(timer)
      }
    }
  }, [requestStatus])

  async function handleSubmitForm(e){
    e.preventDefault()

    setRequestStatus('pending')

    try {
      await sendFetchRequest({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage
      })

      setRequestStatus('success')
      setEnterdEmail('')
      setEnterdName('')
      setEnterdMessage('')

    } catch (error) {
      setRequestError(error)
      setRequestStatus('error')
    }
  }

  let notification

  if(requestStatus === 'pending'){
    notification = {
      status: 'pending',
      title: 'Sending the message',
      message: 'Your message is on its way.'
    }
  }

  if(requestStatus === 'success'){
    notification = {
      status: 'success',
      title: 'Success!',
      message: 'Message has been sent successfully'
    }
  }
  if(requestStatus === 'error'){
    notification = {
      status: 'error',
      title: 'Error!',
      message: requestError
    }
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
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
    </section>
  );
}
