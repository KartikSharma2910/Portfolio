import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import "./styles.css";

const contactData = [
  {
    icon: <MdOutlineEmail />,
    contactType: "Email",
    type: "kartiksharma200029@gmail.com",
    href: "mailto:kartiksharma200029@gmail.com",
    buttonLabel: "Send a mail",
  },
  {
    icon: <BiPhoneCall />,
    contactType: "Phone",
    type: "+91 7988383730",
    href: "tel:7988383730",
    buttonLabel: "Give a call",
  },
  {
    icon: <BsWhatsapp />,
    contactType: "What's App",
    type: "+91 7988383730",
    href: "https://api.whatsapp.com/send?phone=7988383730",
    buttonLabel: "Send a mesage",
  },
];

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_1qkdug8",
      "template_7a70xaa",
      form.current,
      "azntK-n6s9eNqIoM6"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          {contactData.map(
            ({ icon, contactType, href, type, buttonLabel }, idx) => {
              return (
                <article className="contact__option" key={idx}>
                  {icon}
                  <h4>{contactType}</h4>
                  <h5>{type}</h5>
                  <a href={href} target="_blank">
                    {buttonLabel}
                  </a>
                </article>
              );
            }
          )}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows={7}
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
};

export default Contact;
