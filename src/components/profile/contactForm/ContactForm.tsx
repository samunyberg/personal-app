import React, { useState } from "react";
import { FaCheck, FaRegFrown } from "react-icons/fa";
import styles from "./contactForm.module.css";
import { z } from "zod";
import sendEmail from "../../../email";

const schema = z.object({
  name: z
    .string()
    .min(3, "Name must contain at least 3 letters")
    .max(255, "Name cannot be longer than 255 letters"),
  email: z.string().email(),
  message: z
    .string()
    .min(5, "Message must contain at least 5 letters")
    .max(1000, "Message cannot be longer than 1000 letters"),
});

const ContactForm = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSendingSuccess, setIsSendingSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [validationError, setValidationError] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validation = schema.safeParse({ name, email, message });
    if (validation.error) {
      setValidationError({
        name: validation.error.flatten().fieldErrors.name?.[0] || "",
        email: validation.error.flatten().fieldErrors.email?.[0] || "",
        message: validation.error.flatten().fieldErrors.message?.[0] || "",
      });
      return;
    }

    setIsSending(true);
    try {
      const result = await sendEmail(event.target as HTMLFormElement);
      setIsSending(false);
      if (result.status === 200) {
        setIsSendingSuccess(true);
        setError(null);
      }
    } catch (error) {
      setIsSending(false);
      setError("Whoops, something went wrong.");
    } finally {
      setName("");
      setEmail("");
      setMessage("");
      setValidationError({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className={styles.contact}>
      <h3>Contact Me</h3>
      <p className={styles.text}>
        Send me an email using the form below. You can also get in touch with me
        by emailing to samu.nyberg@gmail.com or by phone (+358509179080).
      </p>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <input
            name="name"
            value={name}
            placeholder="Your name"
            onChange={(event) => setName(event.target.value)}
          />
          <span className={styles.error}>{validationError.name}</span>
        </div>
        <div className={styles.formGroup}>
          <input
            name="email"
            value={email}
            placeholder="Your email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <span className={styles.error}>{validationError.email}</span>
        </div>
        <div className={styles.formGroup}>
          <textarea
            name="message"
            value={message}
            placeholder="Message"
            onChange={(event) => setMessage(event.target.value)}
          />
          <span className={styles.error}>{validationError.message}</span>
        </div>
        <div className={styles.formBottom}>
          <button>{isSending ? "Sending..." : "Send"}</button>
          {isSendingSuccess && (
            <div
              className={[
                styles.sendingNotification,
                styles.sendingSuccess,
              ].join(" ")}
            >
              <FaCheck size={20} />
              <p>Message sent successfully!</p>
            </div>
          )}
          {error && (
            <div
              className={[styles.sendingNotification, styles.sendingError].join(
                " "
              )}
            >
              <FaRegFrown size={20} />
              <p>{error}</p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
