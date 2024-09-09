import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="INNERVE 2023"
              description="The INNERVE 2023 Website serves as the online hub for the annual tech fest of the Indira Gandhi Delhi Technical University for Women (IGDTUW). This website is designed to provide visitors with comprehensive information about the event, including various aspects such as events, gallery, sponsors, timeline, INNERVE HACKS, team details, and more."
              ghLink="https://github.com/Violetcv/InnerveHacks"
              demoLink="https://webdinnerve.github.io/Innerve23/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="RED WINE QUALITY
              Exploratory Data Analysis"
              description="EDA"
              ghLink="https://docs.google.com/document/d/1GNDp1fJEEdqhMZoUvFHZeCcYiBtFc2tuPoO6V_EKrZs/edit"
              demoLink="https://docs.google.com/presentation/d/1g_CDX5-nli8_KyLOfiLNIhhSwtIPBW4dSB63VWsviJs/edit#slide=id.g254d13a99af_2_436"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Web Development Mentorship"
              description="teaching students"
              ghLink="https://github.com/Violetcv/LeanIN-Mentorship"
              demoLink="https://lean-in-mentorship.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="ArtVerse"
              description="met museum artwork"
              ghLink="https://drive.google.com/file/d/1vVfuBZy9OYMSjxIWYN_GQPqBe8Xq0Kpt/view"
              demoLink="https://met-museum-artwork.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="EventLock"
              description="token gated system"
              ghLink="https://github.com/Violetcv/token-system"
              demoLink="https://token-system-six.vercel.app/signin"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Heart Disease Prediction"
              description="I completed a machine learning project on heart disease prediction using the UCI Heart Disease dataset. Explored data, selected relevant features, and experimented with classifiers like K Neighbors, Random Forest, and Decision Tree. Achieved mean accuracies of approximately 85%, 82%, and 73% respectively. Continuing to fine-tune models for optimization"
              ghLink="https://github.com/Violetcv/disease-prediction"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Handwritten Character Recognition"
              description="Completed a project on handwritten digit recognition using Logistic Regression with an accuracy of approximately 97.7%. Explored the MNIST dataset, trained a classifier to identify the digit '2', and shared the project on GitHub for further exploration"
              ghLink="https://github.com/Violetcv/handwriting-character-recognition"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Credit Scoring using Logistic Regression"
              description="Developed a credit scoring model using Logistic Regression, achieving an accuracy of 83.3%. Explored and cleaned a dataset with 30 variables and 3000 observations, and shared the project on GitHub for further analysis."
              ghLink="https://github.com/Violetcv/credit-scoring-model"  
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
