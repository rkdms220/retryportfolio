import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import FadeInSection from './FadeInSection';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <FadeInSection>
        <h2>Contact Me</h2>
        <p>Feel free to reach out to me through the form below!</p>
        <form className="contact-form">
          <div className="input-group">
            <FontAwesomeIcon icon={faUser} />
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="input-group">
            <FontAwesomeIcon icon={faEnvelope} />
            <input type="email" placeholder="Your Email" required />
          </div>
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </FadeInSection>
    </section>
  );
};

export default Contact;