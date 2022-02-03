import { Link as Scroll, Element, animateScroll } from "react-scroll";

import "./About.scss";

export default function About(params) {
  return (
    <Element name="about" id="section">
      <div className="data-container">
        <div className="stripes_container">
          <div className="stripe_item__1">
            <p id="title">Who am I?</p>
          </div>
          <div className="stripe_item__2">
            <p>
              Mechatronics <span>engineer</span>
            </p>
          </div>
          <div className="stripe_item__2">
            <p>
              <span>Entrepreneur</span> & <span>teacher</span>
            </p>
          </div>
          <div className="stripe_item__2">
            <p>
              Ambitious <span>self-starter</span>
            </p>
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
