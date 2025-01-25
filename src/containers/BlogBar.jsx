import React, { useEffect } from "react";
import { greetings } from "../portfolio";
import code from '../assets/lottie/coding.json';


import { Fade } from 'react-reveal';

import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";
import { useTranslation } from "react-i18next";

import GreetingLottie from "../components/DisplayLottie";
import SocialLinks from "components/SocialLinks";

const BlogBar = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  })
  return (
    <Fade top duration={1000} distance="40px">
      <main ref="main">
        <div className="position-relative">
          <section className="section section-lg section-shaped ">
            <div className="shape shape-style-1 bg-gradient-info">

            </div>
            <Container className="py-lg-md d-flex">
              <div className="col px-0">


                <h1 className="display-3 text-white" style={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center"
                }}>
                  {"Blog"}
                </h1>



              </div>
            </Container>
            {/* SVG separator */}

          </section>
          {/* 1st Hero Variation */}
        </div>
      </main>
    </Fade>
  );
}

export default BlogBar;
