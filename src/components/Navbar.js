import "./Navbar.scss";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as Scroll, Element, animateScroll } from "react-scroll";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Navbar(params) {
  //   const links = document.querySelectorAll("a");

  const [isClicked, setIsClicked] = useState(false);

  return (
    <nav className="navbar_container">
      {/* <div onClick={() => setIsClicked(!isClicked)} className="hamburger" /> */}

      {!isClicked ? (
        <svg
          onClick={() => setIsClicked(!isClicked)}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          style={{
            width: "7rem",
            position: "fixed",
            top: "1rem",
            right: "1rem",
            cursor: "pointer",
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      ) : (
        <svg
          onClick={() => setIsClicked(!isClicked)}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="black"
          viewBox="0 0 24 24"
          stroke="red"
          style={{
            width: "7rem",
            position: "fixed",
            right: "1rem",
            top: "1rem",
            cursor: "pointer",
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      )}

      {/* <div className="hamburger" id="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div> */}
      {/* <FontAwesomeIcon icon={solid("fa-bars")} /> */}

      <div className={isClicked ? "active" : "navbar_left"}>
        <ul>
          <li>
            <Scroll
              to="home"
              className="home"
              onClick={() => setIsClicked(false)}
            >
              Home
            </Scroll>
          </li>
          <li>
            <Scroll
              to="about"
              className="about"
              onClick={() => setIsClicked(false)}
            >
              About
            </Scroll>
          </li>
          <li>
            <Scroll
              to="passions"
              className="passions"
              onClick={() => setIsClicked(false)}
            >
              Passions
            </Scroll>
          </li>
          <li>
            <Scroll
              to="portfolio"
              className="portfolio"
              onClick={() => setIsClicked(false)}
            >
              Portfolio
            </Scroll>
          </li>
        </ul>
      </div>
      <div className="navbar_right">
        <Scroll to="contact" onClick={() => setIsClicked(false)}>
          Contact Me
        </Scroll>
      </div>
    </nav>
  );
}
