import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertiCard from "./CertiCard";
import Particle from "../Particle";
import fcc from "../../Assets/Certificates/FCC_Python.png";

function Certificates() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certificates </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few certifications I have recieved.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <CertiCard
              imgPath={fcc}
              isBlog={false}
              title="Free Code Camp Python"
              description="The INNERVE 2023 Website serves as the online hub for the annual tech fest of the Indira Gandhi Delhi Technical University for Women (IGDTUW). This website is designed to provide visitors with comprehensive information about the event, including various aspects such as events, gallery, sponsors, timeline, INNERVE HACKS, team details, and more."
              ghLink="https://github.com/Violetcv/InnerveHacks"
              demoLink="https://webdinnerve.github.io/Innerve23/"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertiCard
              imgPath={fcc}
              isBlog={false}
              title="Free Code Camp Python"
              description="The INNERVE 2023 Website serves as the online hub for the annual tech fest of the Indira Gandhi Delhi Technical University for Women (IGDTUW). This website is designed to provide visitors with comprehensive information about the event, including various aspects such as events, gallery, sponsors, timeline, INNERVE HACKS, team details, and more."
              ghLink="https://github.com/Violetcv/InnerveHacks"
              demoLink="https://webdinnerve.github.io/Innerve23/"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertiCard
              imgPath={fcc}
              isBlog={false}
              title="Free Code Camp Python"
              description="The INNERVE 2023 Website serves as the online hub for the annual tech fest of the Indira Gandhi Delhi Technical University for Women (IGDTUW). This website is designed to provide visitors with comprehensive information about the event, including various aspects such as events, gallery, sponsors, timeline, INNERVE HACKS, team details, and more."
              ghLink="https://github.com/Violetcv/InnerveHacks"
              demoLink="https://webdinnerve.github.io/Innerve23/"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertiCard
              imgPath={fcc}
              isBlog={false}
              title="Free Code Camp Python"
              description="The INNERVE 2023 Website serves as the online hub for the annual tech fest of the Indira Gandhi Delhi Technical University for Women (IGDTUW). This website is designed to provide visitors with comprehensive information about the event, including various aspects such as events, gallery, sponsors, timeline, INNERVE HACKS, team details, and more."
              ghLink="https://github.com/Violetcv/InnerveHacks"
              demoLink="https://webdinnerve.github.io/Innerve23/"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertiCard
              imgPath={fcc}
              isBlog={false}
              title="Free Code Camp Python"
              description="The INNERVE 2023 Website serves as the online hub for the annual tech fest of the Indira Gandhi Delhi Technical University for Women (IGDTUW). This website is designed to provide visitors with comprehensive information about the event, including various aspects such as events, gallery, sponsors, timeline, INNERVE HACKS, team details, and more."
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
