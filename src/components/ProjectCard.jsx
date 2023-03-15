import React from "react";
import "../Css/responsive.js";
import styled from "styled-components";
import "../Css/projects.css";
import "../Css/responsive.js";

const ProjectImg = styled.img`
  width: 350px;
  height: 150px;
`;

const ProjectTxt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 1.5rem;
`;

const Title = styled.h4`
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 28px;
`;
const Description = styled.p`
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 16px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  transition: 0.5s ease-in-out;
  &:hover {
    transform: translateY(-15px);
  }
`;

const Link = styled.a`
  color: #b8b8b8;
  text-decoration: none;
  &:hover {
    color: #b8b8b8;
  }
`;

const ProjectCard = ({ title, description, imgUrl, site }) => {
  return (
    <Container>
      <div>
        <Link href={site} target="_blank" rel="noreferrer">
          <ProjectImg src={imgUrl} />
          <ProjectTxt>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </ProjectTxt>
        </Link>
      </div>
    </Container>
  );
};

export default ProjectCard;
