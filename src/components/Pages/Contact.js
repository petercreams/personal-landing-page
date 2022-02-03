import { Element } from "react-scroll";

import "./Contact.scss";

export default function Contact(params) {
  return (
    <Element name="contact" id="section">
      <div className="contact_container">
        <p className="title">
          <span>Contact</span> me!
        </p>

        <div className="contacts_container">
          <h2>Interested to contact me?</h2>
          <p>
            Click <span>one</span> to open:
          </p>
          <div className="providers_container">
            <a
              href="https://github.com/petercreams/"
              target="_blank"
              rel="noreferrer"
              className="provider"
            >
              <img src="images/contact/Git.png" alt="github" />
            </a>
            <a
              href="https://www.instagram.com/peter_creams/"
              target="_blank"
              rel="noreferrer"
              className="provider"
            >
              <img src="images/contact/Instagram.png" alt="instagram" />
            </a>
            <a
              href="mailto:piotr_smietanka@outlook.com"
              target="_blank"
              rel="noreferrer"
              className="provider"
            >
              <img src="images/contact/Email.png" alt="email" />
            </a>
            <a
              href="tel: +48530477514"
              target="_blank"
              rel="noreferrer"
              className="provider"
            >
              <img src="images/contact/Telpon.png" alt="telephone" />
            </a>
          </div>
        </div>
      </div>
    </Element>
  );
}
