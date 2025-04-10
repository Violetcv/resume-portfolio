import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertiCard from "./CertiCard";
import Particle from "../Particle";

import fcc from "../../Assets/Certificates/FCC_Python.png";
import bff from "../../Assets/Certificates/BFF 23.png";
import webd from "../../Assets/Certificates/Bootcamp Certificate Mentee.png";
import gssoc from "../../Assets/Certificates/GSSOC 23 (2).jpeg";
import cfg from "../../Assets/Certificates/code for good 23.png";
import ieee from "../../Assets/Certificates/IEEE_Momentum_DSA.jpeg";
import reign from "../../Assets/Certificates/Reign 23.png";
import vihaan from "../../Assets/Certificates/VIHAAN 23.png";

function Certificates() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certificates </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few certifications I have received.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <CertiCard
              imgPath={fcc}
              isBlog={false}
              title="Free Code Camp Python"
              description="Completed a comprehensive Python curriculum from Free Code Camp, covering data structures, algorithms, and practical projects to strengthen my coding skills."
              ghLink="https://github.com/Violetcv/InnerveHacks"
              demoLink="https://webdinnerve.github.io/Innerve23/"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertiCard
              imgPath={bff}
              isBlog={false}
              title="BFF Hack"
              description="Earned certification for participation in BFF Hack, where I collaborated with peers to develop innovative web solutions within a competitive hackathon environment."
              demoLink="https://webdinnerve.github.io/Innerve23/"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertiCard
              imgPath={webd}
              isBlog={false}
              title="MSC Web Development Bootcamp"
              description="Successfully completed an intensive web development bootcamp as part of my MSC program, gaining hands-on experience with full-stack technologies and modern web design practices."
              ghLink="https://github.com/Violetcv/InnerveHacks"
              demoLink="https://webdinnerve.github.io/Innerve23/"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertiCard
              imgPath={cfg}
              isBlog={false}
              title="Code for Good"
              description="Demonstrated commitment to social impact by contributing to projects at Code for Good, where I applied my coding skills to create technology solutions for community challenges."
              ghLink="https://github.com/Violetcv/InnerveHacks"
              demoLink="https://webdinnerve.github.io/Innerve23/"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertiCard
              imgPath={gssoc}
              isBlog={false}
              title="GSSOC 2023"
              description="Participated in GSSOC 2023, contributing to open source projects and collaborating with developers worldwide while refining my technical abilities."
              ghLink="https://github.com/Violetcv/InnerveHacks"
              demoLink="https://webdinnerve.github.io/Innerve23/"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertiCard
              imgPath={reign}
              isBlog={false}
              title="Reign 23"
              description="Achieved certification for Reign 23, highlighting my skills in software development and problem-solving during a competitive hackathon."
              ghLink="https://github.com/Violetcv/InnerveHacks"
              demoLink="https://webdinnerve.github.io/Innerve23/"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertiCard
              imgPath={ieee}
              isBlog={false}
              title="IEEE Momentum DSA"
              description="Completed the IEEE Momentum DSA course, honing my knowledge of data structures and algorithms with practical exercises and coding challenges."
              ghLink="https://github.com/Violetcv/InnerveHacks"
              demoLink="https://webdinnerve.github.io/Innerve23/"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertiCard
              imgPath={vihaan}
              isBlog={false}
              title="Vihaan 23"
              description="Earned recognition at Vihaan 23 for innovation and technical excellence through competitive coding challenges and project presentations."
              ghLink="https://github.com/Violetcv/InnerveHacks"
              demoLink="https://webdinnerve.github.io/Innerve23/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;
