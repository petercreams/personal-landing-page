import "./Navbar.scss";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as Scroll, Element, animateScroll } from "react-scroll";

export default function Navbar(params) {
  return (
    <nav className="navbar_container">
      <div className="navbar_left">
        <Scroll to="home" className="home">
          Home
        </Scroll>

        <Scroll to="about" className="about">
          About
        </Scroll>

        <Scroll to="passions" className="passions">
          Passions
        </Scroll>

        <Scroll to="portfolio" className="portfolio">
          Portfolio
        </Scroll>
      </div>
      <div className="navbar_right">
        <Scroll to="contact">Contact Me</Scroll>
      </div>
    </nav>
  );
}
