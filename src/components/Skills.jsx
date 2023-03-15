import React from "react";
import styled from "styled-components";
import nodejs from "../assets/nodejs.png";
import reactjs from "../assets/reactjs.png";
import reactNative from "../assets/reactnative.png";
import javascript from "../assets/javascript.png";
import html from "../assets/HTML.png";
import express from "../assets/express.png";
import css from "../assets/Css.png";
import "../Css/Skill.css";
import { mobile } from "../Css/responsive.js";
import next from "../assets/next.png";
import { AnimationOnScroll } from "react-animation-on-scroll";

const SkillImg = styled.img`
  width: 250px;
  height: 120px;
  ${mobile({
    width: "300px",
  })}
`;
const Svg = styled.div`
  display: block;
`;

const techs = [
  {
    id: 1,
    src: html,
    title: "HTML",
    style: "shadow-orange",
  },
  {
    id: 2,
    src: css,
    title: "CSS",
    style: "shadow-blue",
  },
  {
    id: 3,
    src: nodejs,
    title: "NodeJs",
    style: "shadow-green",
  },
  {
    id: 4,
    src: javascript,
    title: "JavaScript",
    style: "shadow-yellow",
  },
  {
    id: 5,
    src: reactjs,
    title: "React",
    style: "shadow-blue",
  },

  {
    id: 6,
    src: next,
    title: "Next Js",
    style: "shadow-white",
  },
];

const Header = styled.h1``;

const SkillDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(660px, 2fr));
  gap: 2rem;
  justify-items: center;
  align-items: center;
  padding: 4rem 0;
  ${mobile({
    display: "flex",
    flexDirection: "column",
    rowGap: "3.5rem",
  })}
`;

const SubHeader = styled.h3``;

const Skills = () => {
  return (
    <>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#686b83"
            fill-opacity="1"
            d="M0,256L48,218.7C96,181,192,107,288,90.7C384,75,480,117,576,154.7C672,192,768,224,864,208C960,192,1056,128,1152,112C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <section className="skill" id="skills">
        <SkillDiv>
          <Header>Experience</Header>
          <SubHeader>These are the technologies I've worked with</SubHeader>
        </SkillDiv>
        <AnimationOnScroll animateIn="animate__fadeInUp">
          <SkillGrid>
            {techs.map(({ id, src, title, style }) => (
              <div key={id} className={`tech-card ${style} `}>
                <img src={src} alt={title} className="tech-image" />
                <p className="tech-title">{title}</p>
              </div>
            ))}
          </SkillGrid>
        </AnimationOnScroll>
        <Svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1430 310">
            <path
              fill="#454042"
              fill-opacity="1"
              d="M0,256L48,218.7C96,181,192,107,288,90.7C384,75,480,117,576,154.7C672,192,768,224,864,208C960,192,1056,128,1152,112C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </Svg>
      </section>

      <div></div>
    </>
  );
};

export default Skills;
