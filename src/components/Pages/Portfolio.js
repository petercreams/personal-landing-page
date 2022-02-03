import { Element } from "react-scroll";

import { useState, useEffect } from "react";

import "./Portfolio.scss";

const portfolio = [
  {
    id: "1",
    projectName: "Portfolio website",
    desc: "Personal landing page about me.",
    projectImg: "images/projects/landing-page.png",
    technologies: ["React.js", "SASS", "Figma"],
  },
  {
    id: "2",
    projectName: "LMS Demo",
    desc: "MVP of fullstack commercial video-based Learning Management System for NewTone Company (in progress).",
    projectImg: [
      "images/projects/mathx1.png",
      "images/projects/mathx2.png",
      "images/projects/mathx3.png",
      "images/projects/mathx4.png",
      "images/projects/mathx5.png",
    ],
    technologies: ["Next.js", "Firebase", "SASS", "Figma"],
    website: "https://github.com/petercreams/edu-platform",
  },
  {
    id: "3",
    projectName: "NewTone CMS",
    desc: "First MVP of commercial Learning Management System for NewTone Company.",
    projectImg: [
      "images/projects/newtone1.png",
      "images/projects/newtone2.png",
      "images/projects/newtone3.png",
    ],
    technologies: ["wix.com", "JavaScript ES6"],
    website: "https://newtonekursy.wixsite.com/mojawitryna",
  },
];

export default function Portfolio(params) {
  const [projectNumber, setProjectNumber] = useState(0);
  const [projectNumber2, setProjectNumber2] = useState(0);

  // handle carousel image show
  useEffect(() => {
    if (projectNumber < portfolio[1].projectImg.length)
      setTimeout(() => {
        setProjectNumber(projectNumber + 1);
      }, 5000);
    else {
      setProjectNumber(0);
    }
  }, [projectNumber]);

  useEffect(() => {
    if (projectNumber2 < portfolio[2].projectImg.length)
      setTimeout(() => {
        setProjectNumber2(projectNumber2 + 1);
      }, 5000);
    else {
      setProjectNumber2(0);
    }
  }, [projectNumber2]);

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
              <p>{portfolio[0].desc}</p>
            </div>
            <div className="projects_stack">
              <h2>Devices:</h2>
              <p>Desktop | Mobile</p>
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
              Click{" "}
              <a target="_blank" rel="noreferrer" href={portfolio[1].website}>
                here
              </a>{" "}
              to open
            </p>

            <img
              src={portfolio[1].projectImg[projectNumber]}
              alt={`${portfolio[1].projectName}-screen`}
            />
          </div>
          <div className="credentials_container">
            <div className="project-title">
              <h2>{portfolio[1].projectName}</h2>

              <p>{portfolio[1].desc}</p>
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
        <div className="projects_container">
          <div className="project_container">
            <h1>{`#${portfolio[2].id} Project`}</h1>
            <p>
              Click{" "}
              <a target="_blank" rel="noreferrer" href={portfolio[2].website}>
                here
              </a>{" "}
              to open
            </p>

            <img
              src={portfolio[2].projectImg[projectNumber2]}
              alt={`${portfolio[2].projectName}-screen`}
            />
          </div>
          <div className="credentials_container">
            <div className="project-title">
              <h2>{portfolio[2].projectName}</h2>

              <p>{portfolio[2].desc}</p>
            </div>
            <div className="projects_stack">
              <h2>Devices:</h2>
              <p>Desktop | Mobile</p>

              <h2>Technologies:</h2>
              <ul>
                {portfolio[2].technologies.map((technology) => {
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
