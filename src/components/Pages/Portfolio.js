import { Link as Scroll, Element, animateScroll, scrollTo } from "react-scroll";

import { useState, useEffect } from "react";

import "./Portfolio.scss";

const portfolio = [
  {
    id: "1",
    projectName: "Portfolio website",
    projectImg: "/images/projects/landing-page.png",
    technologies: ["React.js", "SASS", "Figma"],
  },
  {
    id: "2",
    projectName: "LMS Demo",
    projectImg: ["/images/projects/mathx1.png", "/images/projects/mathx2.png"],
    technologies: ["Next.js", "Firebase", "SASS", "Figma"],
  },
  {
    id: "3",
    projectName: "NewTone CMS",
    projectImg: "/images/projects/newtone1.png",
    technologies: ["wix.com", "JavaScript ES6"],
  },
];

export default function Portfolio(params) {
  const { projectNumber, setProjectNumber } = useState(0);

  // useEffect(() => {
  //   if (projectNumber < portfolio[1].projectImg.length - 1) {
  //     setProjectNumber(projectNumber + 1);
  //   } else {
  //     setProjectNumber(0);
  //   }
  // }, [projectNumber, setProjectNumber]);

  return (
    <Element name="portfolio" id="section">
      <div className="portfolio_container">
        <p className="title">
          My <span>portfolio</span>
        </p>
        <div className="projects_container">
          <div className="project_container">
            <h1>{`#${portfolio[0].id} Project`}</h1>
            <p>
              Click <a href="/">here</a> to open
            </p>

            <img
              onClick={() => window.location.href("google.com")}
              src={portfolio[0].projectImg}
              alt={`${portfolio[0].projectName}-screen`}
            />
          </div>
          <div className="credentials_container">
            <div className="project-title">
              <h2>{portfolio[0].projectName}</h2>
              <p>Personal landing page about me</p>
            </div>
            <div className="projects_stack">
              <h2>Devices:</h2>
              <p>Desktop</p>
              <h2>Technologies:</h2>
              <ul>
                {portfolio[0].technologies.map((technology) => {
                  return <li>{technology}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project_container">
            <h1>{`#${portfolio[1].id} Project`}</h1>
            <p>
              Click <a href="/">here</a> to open
            </p>

            <img
              onClick={() => window.location.href("google.com")}
              src={portfolio[1].projectImg[1]}
              alt={`${portfolio[1].projectName}-screen`}
            />
          </div>
          <div className="credentials_container">
            <div className="project-title">
              <h2>{portfolio[1].projectName}</h2>

              <p>
                MVP of commercial video-based Learning Management System for
                NewTone Company (in progress)
              </p>
            </div>
            <div className="projects_stack">
              <h2>Devices:</h2>
              <p>Desktop</p>

              <h2>Technologies:</h2>
              <ul>
                {portfolio[1].technologies.map((technology) => {
                  return <li>{technology}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
