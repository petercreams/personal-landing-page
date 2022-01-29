import { Link as Scroll, Element, animateScroll, scrollTo } from "react-scroll";
import { useState } from "react";
import PassionCard from "../Cards/PassionCard";

import "./Passions.scss";

// TODO: zrobić tablicę obiektów id (index), image, name, text (about)
// po kliknięciu w dany przycisk otwiera się modal do którego przekazywany jest
// obiekt o danym indeksie i stamtąd pobierane dane - również tekstowe

const passions = [
  {
    id: "0",
    image: "images/passions/frontend.svg",
    name: "Front-end Development",
    text: "I'm into frontend development since mid-2020 since I've run my e-learning business and created my first CMS site on wix.com. From this point forward I gradually develop my web dev skills, such as programming in HTML, CSS, JavaScript, React.js, Next.js, Node.js, and creating web applications' mockups on Figma. My journey with programming has started in high school in 2016. Since then I've tried many programming languages: C++, Kotlin, Python, SQL however when I got familiar with Web Development, I fell in love with it!",
    imagePassion: "",
  },
  {
    id: "1",
    image: "images/passions/marketing.svg",
    name: "Online marketing",
    text: "I'm online marketing passionate with 1y+ experience with running ads on Google Ads and Facebook Ads for my business and commercial as a part of work in a marketing agency. I am familiar with Google Marketing Platform Tools, such as Google Analytics, Google Data Studio, Google Tag Manager, and Google Optimize. All this experience is crucial in my web development career, cause it helps me see marketing opportunities, that other developers can't.",
    imagePassion: "",
  },
  {
    id: "2",
    image: "images/passions/teach.svg",
    name: "Teaching / Mentoring",
    text: "Just about in school, I've realized that teaching others is not only my passion but also a valuable skill. It makes me feel fulfilled and encouraged when I can make some, at the start, the complex material sounds easy and understandable for my student. In my 5y+ teaching career, I've been preparing students for their finals in math and physics. I can undoubtedly say that there is nothing I can't teach, if only I understand it. As a teacher, I also focus on students' character, so I can better encourage and motivate them to work and develop.",
    imagePassion: "",
  },
  {
    id: "3",
    image: "images/passions/business.svg",
    name: "Business development",
    text: "3",
    imagePassion: "",
  },
  {
    id: "4",
    image: "images/passions/selfdev.svg",
    name: "Self development",
    text: "4",
    imagePassion: "",
  },
  {
    id: "5",
    image: "images/passions/art.svg",
    name: "Acting / Singing",
    text: "x",
    imagePassion: "",
  },
];

// TODO: po kliknięciu wyświetlenie się modala poniżej na mobile i modala normalnego na desktopie

export default function Passions(params) {
  const [isClicked, setIsClicked] = useState({
    frontend: false,
    marketing: false,
    teaching: false,
    business: false,
    selfdev: false,
    acting: false,
  });

  return (
    <Element name="passions" id="section">
      <div className="container">
        <div className="title">
          <p>
            What my <span id="underline">passions</span> are?
          </p>
        </div>
        <div className="items-container">
          {passions.map((passion) => {
            return (
              <PassionCard
                id={passion.id}
                image={passion.image}
                name={passion.name}
                text={passion.text}
                passions={passions}
              />
            );
          })}
          {/* <PassionCard
            id="1"
            image="images/passions/frontend.svg"
            name="Front-end Development"
          />
          <PassionCard
            id="2"
            image="images/passions/marketing.svg"
            name="Online marketing"
          />
          <PassionCard
            id="3"
            image="images/passions/teach.svg"
            name="Teaching / Mentoring"
          />
          <PassionCard
            id="4"
            image="images/passions/business.svg"
            name="Business development"
          />
          <PassionCard
            id="5"
            image="images/passions/selfdev.svg"
            name="Self development"
          />
          <PassionCard
            id="6"
            image="images/passions/art.svg"
            name="Acting / Singing"
          /> */}
        </div>
      </div>
    </Element>
  );
}
