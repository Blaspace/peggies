import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import PopupText from "./PopupText";

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState(undefined);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_te4dhyv",
        "template_yx9834p",
        form.current,
        "zOBjBpOPwJy-QlT9L"
      )
      .then(
        (result) => {
          setStatus(
            "thanks for contacting peggies events decoration, your message has been sent, our team will get back to you soon!"
          );
        },
        (error) => {
          setStatus("Sory your message was not sent, please try again!");
        }
      );
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail} className="form">
        <input type="text" name="user_name" placeholder="Full name" />
        <input type="email" name="user_email" placeholder="Email" />
        <input type="tel" name="phone_number" placeholder="phone number" />
        <textarea name="message" placeholder="Write a message" />
        <button type="submit">send</button>
      </form>
      {status && (
        <div className="status-con">
          <PopupText status={status} setStatus={setStatus} />
        </div>
      )}
    </>
  );
};

export default ContactForm;
