import "./Navbar.scss";
import { useState, useRef, useEffect } from "react";

export default function Navbar(params) {
  const home = useRef();
  const about = useRef();
  const passions = useRef();
  const portfolio = useRef();

  const [lastClicked, setLastClicked] = useState("");

  const toggle = (e) => {
    if (lastClicked) lastClicked.style.color = "white";
    if (!lastClicked) {
      setLastClicked(e.target);
    }

    e.target.style.color = "#dc2e2e";

    setLastClicked(e.target);
  };

  useEffect(() => {
    home.current.style.color = "#dc2e2e";
    setLastClicked(home.current);
  }, []);

  return (
    <div className="navbar_container">
      <div className="navbar_left">
        <a ref={home} href="#home" onClick={(e) => toggle(e)}>
          Home
        </a>
        <a ref={about} href="#about" onClick={(e) => toggle(e)}>
          About
        </a>
        <a ref={passions} href="#passions" onClick={(e) => toggle(e)}>
          Passions
        </a>
        <a ref={portfolio} href="#portfolio" onClick={(e) => toggle(e)}>
          Portfolio
        </a>
      </div>
      <div className="navbar_right">
        <a href="#contact">Contact Me</a>
      </div>
    </div>
  );
}
