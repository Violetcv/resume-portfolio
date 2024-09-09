import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertiCard from "./CertiCard";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
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
              title="INNERVE 2023"
              description="The INNERVE 2023 Website serves as the online hub for the annual tech fest of the Indira Gandhi Delhi Technical University for Women (IGDTUW). This website is designed to provide visitors with comprehensive information about the event, including various aspects such as events, gallery, sponsors, timeline, INNERVE HACKS, team details, and more."
              ghLink="https://github.com/Violetcv/InnerveHacks"
              demoLink="https://webdinnerve.github.io/Innerve23/"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertiCard
              imgPath={fcc}
              isBlog={false}
              title="RED WINE QUALITY
              Exploratory Data Analysis"
              description="EDA"
              ghLink="https://docs.google.com/document/d/1GNDp1fJEEdqhMZoUvFHZeCcYiBtFc2tuPoO6V_EKrZs/edit"
              demoLink="https://docs.google.com/presentation/d/1g_CDX5-nli8_KyLOfiLNIhhSwtIPBW4dSB63VWsviJs/edit#slide=id.g254d13a99af_2_436"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertiCard
              imgPath={editor}
              isBlog={false}
              title="Web Development Mentorship"
              description="teaching students"
              ghLink="https://github.com/Violetcv/LeanIN-Mentorship"
              demoLink="https://lean-in-mentorship.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <CertiCard
              imgPath={editor}
              isBlog={false}
              title="ArtVerse"
              description="met museum artwork"
              ghLink="https://drive.google.com/file/d/1vVfuBZy9OYMSjxIWYN_GQPqBe8Xq0Kpt/view"
              demoLink="https://met-museum-artwork.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <CertiCard
              imgPath={editor}
              isBlog={false}
              title="EventLock"
              description="token gated system"
              ghLink="https://github.com/Violetcv/token-system"
              demoLink="https://token-system-six.vercel.app/signin"              
            />
          </Col>

          <Col md={4} className="project-card">
            <CertiCard
              imgPath={editor}
              isBlog={false}
              title="Heart Disease Prediction"
              description="I completed a machine learning project on heart disease prediction using the UCI Heart Disease dataset. Explored data, selected relevant features, and experimented with classifiers like K Neighbors, Random Forest, and Decision Tree. Achieved mean accuracies of approximately 85%, 82%, and 73% respectively. Continuing to fine-tune models for optimization"
              ghLink="https://github.com/Violetcv/disease-prediction"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;
