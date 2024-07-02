import emailjs from "@emailjs/browser";

emailjs.init(import.meta.env.VITE_GMAIL_PUBLIC_KEY);

const sendEmail = async (form: HTMLFormElement) => {
  try {
    const serviceID = import.meta.env.VITE_GMAIL_SERVICE_ID;
    const templateID = import.meta.env.VITE_GMAIL_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_GMAIL_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey) {
      throw new Error("Missing EmailJS configuration");
    }

    const result = await emailjs.sendForm(
      serviceID,
      templateID,
      form,
      publicKey
    );
    return result;
  } catch (error) {
    console.error("Failed to send email:", error);
    throw error;
  }
};

export default sendEmail;
