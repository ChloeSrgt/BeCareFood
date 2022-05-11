import ContactForm from "../components/ContactForm";
import WallPic from "../components/WallPic";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <WallPic />
      <h1>Contactez-nous</h1>
      <ContactForm />
    </div>
  );
}

export default Contact;
