import React, { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import "../Css/Contact.css";
import contactSvg from "../assets/contact-img.svg";
import emailjs from "@emailjs/browser";
import { Button } from "@mui/material";
import { mobile } from "../Css/responsive.js";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Header = styled.h1`
  font-size: 48px;
  font-weight: 700;
  padding-bottom: 15px;
`;
const ImgDiv = styled.div`
  ${mobile({
    display: "none",
  })}
`;
const SvgDiv = styled.div`
  ${mobile({
    display: "none",
  })}
`;
const SubHeader = styled.h4``;

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const isFormValid =
    name !== "" && message !== "" && email !== "" && subject !== "";

  const form = useRef();
  const notify = (message) =>
    toast(message, {
      position: "top-center",
    });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_w4jp5mi",
        "template_h2ln8yf",
        form.current,
        "0tBUurgtCzMJ_5PBg"
      )
      .then(
        (result) => {
          notify("message sent");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#686b83"
          fill-opacity="1"
          d="M0,192L60,176C120,160,240,128,360,138.7C480,149,600,203,720,197.3C840,192,960,128,1080,112C1200,96,1320,128,1380,144L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <section id="contact" className="contact-me">
        {/* <button onClick={() => notify("hello")}>click</button> */}
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <Header>Contact Me </Header>
              <SubHeader>I am looking for a full time Job!</SubHeader>
              <div>
                <form ref={form} onSubmit={sendEmail}>
                  <ul>
                    <AnimationOnScroll animateIn="animate__bounceInLeft">
                      <li>
                        <input
                          placeholder="Name"
                          type="text"
                          name="name"
                          required
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        />
                      </li>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__bounceInRight">
                      <li>
                        <input
                          placeholder="Email"
                          type="email"
                          name="email"
                          required
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                      </li>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__bounceInUp">
                      <li>
                        <input
                          placeholder="Subject"
                          type="text"
                          name="subject"
                          required
                          onChange={(e) => {
                            setSubject(e.target.value);
                          }}
                        />
                      </li>
                      <li>
                        <textarea
                          placeholder="Message"
                          name="message"
                          required
                          onChange={(e) => {
                            setMessage(e.target.value);
                          }}
                        ></textarea>
                      </li>

                      <li>
                        {!isFormValid ? (
                          <div>
                            <Button
                              disabled
                              variant="contained"
                              sx={{ margin: "0px 0px 15px 0px" }}
                              style={{ color: "white" }}
                            >
                              Must Fill Form before sending{" "}
                            </Button>
                          </div>
                        ) : (
                          <div>
                            <input type="submit" value="SEND" />
                          </div>
                        )}
                      </li>
                    </AnimationOnScroll>
                  </ul>
                </form>
              </div>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <ImgDiv>
                <img src={contactSvg} alt="" />
              </ImgDiv>
            </Col>
          </Row>
        </Container>
        <SvgDiv>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#454042"
              fill-opacity="1"
              d="M0,192L60,176C120,160,240,128,360,138.7C480,149,600,203,720,197.3C840,192,960,128,1080,112C1200,96,1320,128,1380,144L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </SvgDiv>
      </section>
      <ToastContainer
        toastStyle={{
          backgroundColor: "#686b83",
          color: "#fff",
          fontSize: "18px",
        }}
      />
    </>
  );
};

export default Contact;
