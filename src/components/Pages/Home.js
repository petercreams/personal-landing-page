import "./Home.scss";

import { Element } from "react-scroll";

export default function Home(params) {
  return (
    <Element name="home" id="section">
      <div className="data-container">
        <div className="stripes_container">
          <div className="stripe_item__1">
            <p id="name">PIOTR ŚMIETANKA</p>
          </div>
          <div className="stripe_item__2">
            <p>Web Development</p>
          </div>
          <div className="stripe_item__2">
            <p>Marketing</p>
          </div>
          <div className="stripe_item__2">
            <p>Education</p>
          </div>
        </div>
        <div className="profile_photo">
          <img src="piotr_photo.png" alt="Piotr Śmietanka" />
          <span className="dot-white"></span>
          <span className="dot-red"></span>
        </div>
      </div>
    </Element>
  );
}
