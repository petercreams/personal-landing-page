import "./Navbar.scss";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as Scroll, Element, animateScroll } from "react-scroll";

export default function Navbar(params) {
  return (
    <nav className="navbar_container">
      <div className="hamburger" />

      {/* <div className="hamburger" id="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div> */}
      <div className="navbar_left">
        <ul>
          <li>
            <Scroll to="home" className="home">
              Home
            </Scroll>
          </li>
          <li>
            <Scroll to="about" className="about">
              About
            </Scroll>
          </li>
          <li>
            <Scroll to="passions" className="passions">
              Passions
            </Scroll>
          </li>
          <li>
            <Scroll to="portfolio" className="portfolio">
              Portfolio
            </Scroll>
          </li>
        </ul>
      </div>
      <div className="navbar_right">
        <Scroll to="contact">Contact Me</Scroll>
      </div>
    </nav>
  );
}
