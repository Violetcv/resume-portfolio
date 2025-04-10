import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/me.png";
import Particle from "../Particle";
import Type from "./Type";
import bny from "../../Assets/bny.png";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> CHHAVI VERMA</strong>
              </h1>

              <h1 className="heading-name">
                Data Science Intern
                
                  <strong className="main-name"> @  </strong>
                  <img
                   src={bny}
                   style={{
                    maxHeight: "20px"
                   }}/>
                
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{
                  maxHeight: "440px",
                  borderRadius: "30px", // Adjust the radius as needed
                  boxShadow: "0 4px 8px #6D2932",
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      {/* <Home2 /> */}
    </section>
  );
}

export default Home;
