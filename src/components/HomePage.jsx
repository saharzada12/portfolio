import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";
import headerImg from "../assets/header-img.svg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { mobile } from "../Css/responsive.js";
import ScrollToTop from "react-scroll-to-top";
import "../index.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const ContactMe = styled.button`
  border: 2px solid;
  border-color: #ac9ee6;
  border-radius: 3px;
  background-color: transparent;
  color: #e9e1e1;
  width: 200px;
  transition: 0.5s ease-in-out;
  height: 45px;
  &:hover {
    background-color: #ac9ee6;
    color: #1d1c1c;
  }
`;
const SubHeader = styled.p`
  font-size: 24px;
`;

const HeaderSpan = styled.span`
  color: #b8b8b8;
  font-weight: 500;
  letter-spacing: 0.8px;
`;
const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding-top: 15px;
`;
const HeaderHome = styled.h1`
  font-size: 54px;
  font-weight: 600;
`;

const RightSide = styled.div`
  padding-top: 100px;
  ${mobile({
    display: "none",
  })}
`;

const MoveTo = styled.a`
  color: #ac9ee6;
  &:hover {
    color: #ac9ee6;
  }
`;
const ConnectBtn = styled.a`
  text-decoration: none;
  color: #e9e1e1;
  &:hover {
    color: #e9e1e1;
  }
`;

const Scroll = styled.a`
  text-decoration: none;
  color: rgba(220, 186, 221, 0.4);
  position: absolute;
  transform: rotate(90deg);
  font-size: 26px;
  left: 50px;
  top: 350px;
  ${mobile({
    display: "none",
  })}
`;

const SvgMove = styled.img`
  animation: move 7s linear infinite;
`;

const HomePage = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Full-Stack Developer", "Web Developer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <div>
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <Scroll href="#contact">Scroll down</Scroll>
              <AnimationOnScroll animateIn="animate__bounce">
                <HeaderSpan>Welcome to my Portfolio</HeaderSpan>
              </AnimationOnScroll>
              <HeaderHome>
                {`Hi I'm sahar zada`} <span className="wrap">{text}</span>
              </HeaderHome>
              <SubHeader>
                I'm a Junior Full-stack developer with one year of experience,
                passionate about technology and striving to be the best. I'm a
                fast learner and a team player who's determined and hardworking.
                I'm always trying to grow professionally and absorb as much
                knowledge as I can.
              </SubHeader>
              <ContactMe onClick={() => console.log("connect")}>
                <ConnectBtn href="#contact">Let's Connect</ConnectBtn>
              </ContactMe>
              <ButtonDiv>
                <MoveTo
                  href="https://www.linkedin.com/in/sahar-zada-57b02621a/"
                  target="_blank"
                >
                  <LinkedInIcon fontSize="large" />
                </MoveTo>
                <MoveTo href="http://github.com" target="_blank">
                  <GitHubIcon fontSize="large" />
                </MoveTo>
              </ButtonDiv>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <RightSide>
                <SvgMove src={headerImg} alt="homepage img" />
              </RightSide>
            </Col>
          </Row>
          <ScrollToTop smooth />
        </Container>
      </section>
    </div>
  );
};

export default HomePage;
