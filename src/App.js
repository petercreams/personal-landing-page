import "./App.scss";
import Navbar from "./components/Navbar";
import About from "./components/Pages/About";
import Home from "./components/Pages/Home";
import Passions from "./components/Pages/Passions";
import Portfolio from "./components/Pages/Portfolio";
import Contact from "./components/Pages/Contact";

import { animateScroll } from "react-scroll";

import { useEffect } from "react";
import Test from "./components/Pages/Test";

function App() {
  // scroll to top on load
  useEffect(() => {
    animateScroll.scrollToTop();
  }, []);

  // highlight current section in Navbar
  useEffect(() => {
    const sections = document.querySelectorAll("[id^='section']");
    const navbarEl = document.querySelectorAll("a");

    var current = "";

    window.addEventListener("scroll", () => {
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 4) {
          current = section.getAttribute("name");
        }
      });

      navbarEl.forEach((element) => {
        element.classList.remove("active");

        if (element.classList.contains(current)) {
          element.classList.add("active");
        }
      });
    });
  });

  return (
    <body>
      <Navbar />
      {/* <Test /> */}
      <div className="bg">
        <Home />
        <About />
        <Passions />
        <Portfolio />
        <Contact />

        {/* <img
          className="arrow"
          src="arrow-down-circle.svg"
          alt="arrow-down"
          onClick={() => {
            animateScroll.scrollMore(1000);
          }}
        /> */}
      </div>
    </body>
  );
}

export default App;
