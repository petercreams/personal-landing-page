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
    text: "I've been doing frontend development since mid-2020, when I ran an e-learning company and created my first CMS site on wix.com. Since then, I have been gradually developing my web dev skills such as programming in HTML, CSS, JavaScript, React.js, Next.js, Node.js and creating mockups of web applications on Figma. My journey with programming began in high school in 2016. Since then, I have tried many programming languages: C++, Kotlin, Python, SQL however when I was introduced to Web Development I fell in love with it!",
    imagePassion: "",
  },
  {
    id: "1",
    image: "images/passions/marketing.svg",
    name: "Online marketing",
    text: "I am a passionate internet marketer with 1y+ experience running Google Ads and Facebook Ads for my own business and commercially as part of my work at a marketing agency. I am familiar with Google Marketing Platform tools such as Google Analytics, Google Data Studio, Google Tag Manager, and Google Optimize. All of these experiences are crucial in my career as a web developer because they help me see marketing opportunities that other developers fail to see.",
    imagePassion: "",
  },
  {
    id: "2",
    image: "images/passions/teach.svg",
    name: "Teaching / Mentoring",
    text: "Back in school, I realized that teaching others is not only my passion but also a valuable skill. I feel fulfilled and uplifted when I can make initially complex material sound easy and understandable to a student. In my 5+ years as a teacher, I have prepared students for math and physics finals. I can say without a doubt that there is nothing I can't teach as long as I understand the subject. As a teacher, I also pay attention to students' character traits so that I can better encourage and motivate them to work and grow.",
    imagePassion: "",
  },
  {
    id: "3",
    image: "images/passions/business.svg",
    name: "Business development",
    text: "I've always been a type of self-starter. In 2016, I ran my first community project - a laser tag championship - in my hometown where we raised money for charity. For the first time in my life, I realized that not only could I have an impact, but I also enjoyed creating projects: coming up with them, managing them, and executing them. From that point on, I've been collaborating with Fundacja Energia-Działanie Foundation as a volunteer and project coordinator and earned certifications in project management (f.e. PMF - Project Management Fundamentals).  I was also an active member of the international organization Enactus Warsaw University of Technology, where for half a year I led my project on integration in times of COVID-19 pandemic, which involved six people and resulted in 4 online meetings for students from Warsaw universities. In mid-2020, my associate and I started an online e-learning business, which has been developed ever since.",
    imagePassion: "",
  },
  {
    id: "4",
    image: "images/passions/selfdev.svg",
    name: "Self development",
    text: "Getting up at 6:30 a.m. every day, getting 6.5 hours of sleep, filling every gap in my calendar with 'productive activities', engaging in a million things at once... I DON'T DO THAT ANYMORE :) I've realized how important it is to balance life and enjoy the journey, hence I still set the bar high for myself, but not at all costs anymore. I enjoy reading psychology and business books and listening to podcasts and interviews on these topics. In my free time, I also like to be close to nature.",
    imagePassion: "",
  },
  {
    id: "5",
    image: "images/passions/art.svg",
    name: "Acting / Singing",
    text: "Art and my person have always been close to each other. During my school years, I won recitation contests and performed on stage as a presenter or actor. In high school, together with my friends, we founded a theater group and staged two musicals. In one of them, I played the main role - I played the piano, sang and danced - for the other I only recorded background music. I am also a piano graduate from the First Degree Music School in Kozienice. In my free time, I like to go out for a beer and karaoke, and whenever I have the opportunity to perform on stage - I gladly do it.",
    imagePassion: "",
  },
];

// TODO: po kliknięciu wyświetlenie się modala poniżej na mobile i modala normalnego na desktopie

export default function Passions(params) {
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
        </div>
      </div>
    </Element>
  );
}
