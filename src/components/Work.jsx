import React from "react";
import ZaShop from "../assets/zashop.png";
import MyGym from "../assets/myGym.png";
import KeyNotes from "../assets/keynotes.png";
import TaskManager from "../assets/taskmanager.png";
import "../Css/projects.css";
import styled from "styled-components";
import { mobile } from "../Css/responsive.js";
import ProjectCard from "./ProjectCard";

const ProjectsHeader = styled.h2`
  color: #ac9ee6;
  font-size: 45px;
  font-weight: 700;
  ${mobile({
    fontSize: "35px",
  })}
`;

const ProjectP = styled.p`
  color: #b8b8b8;
  letter-spacing: 0.8px;
  font-size: 18px;
  line-height: 1.5em;
`;

const Container = styled.div`
  align-items: center;
  text-align: center;
  ${mobile({})}
`;

const ProjectsDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const Work = () => {
  const projects = [
    {
      title: "ZaShop - ECommerce",
      description: "Design & Development",
      imgUrl: ZaShop,
      site: "https://zashopbysahar.netlify.app/",
    },
    {
      title: "Key Notes",
      description: "Design & Development",
      imgUrl: KeyNotes,
      site: "https://github.com/saharzada12/music-notes",
    },
    {
      title: "MyGym App",
      description: "Design & Development",
      imgUrl: MyGym,
      site: "https://github.com/saharzada12/MyGym",
    },
    {
      title: "Task Manager",
      description: "Design & Development",
      imgUrl: TaskManager,
      site: "https://github.com/saharzada12/Task-manager",
    },
  ];

  return (
    <>
      <section className="project" id="work">
        <Container>
          <ProjectsHeader>My List of Projects</ProjectsHeader>
          <ProjectP>Projects that I have Design and Developed</ProjectP>
          <ProjectsDiv>
            {projects.map((project, index) => {
              return <ProjectCard key={index} {...project} />;
            })}
          </ProjectsDiv>
        </Container>
      </section>
    </>
  );
};

export default Work;
