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
        <img
          className="profile_photo_2"
          src="piotr_photo.png"
          alt="Piotr Śmietanka"
        />
      </div>
    </Element>
  );
}
