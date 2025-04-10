import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import innerve from "../../Assets/Projects/innerve.png";
import leanin from "../../Assets/Projects/leanin mentor.jpg";
import wine from "../../Assets/Projects/wine.jpeg";
import art from "../../Assets/Projects/Art.png";
import heart from "../../Assets/Projects/heart.jpg";
import digit from "../../Assets/Projects/digit.png";
import credit from "../../Assets/Projects/credit.jpg";

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
              imgPath={innerve}
              isBlog={false}
              title="INNERVE 2023"
              description="The INNERVE 2023 Website serves as the online hub for the annual tech fest of IGDTUW. It showcases event details, galleries, sponsor information, timelines, hackathons, and team profiles in an engaging design."
              ghLink="https://github.com/Violetcv/InnerveHacks"
              demoLink="https://webdinnerve.github.io/Innerve23/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wine}
              isBlog={false}
              title="Red Wine Quality EDA"
              description="An exploratory data analysis project on the red wine quality dataset. The project uses interactive charts and statistical techniques to reveal insights about factors affecting wine quality."
              ghLink="https://docs.google.com/document/d/1GNDp1fJEEdqhMZoUvFHZeCcYiBtFc2tuPoO6V_EKrZs/edit"
              demoLink="https://docs.google.com/presentation/d/1g_CDX5-nli8_KyLOfiLNIhhSwtIPBW4dSB63VWsviJs/edit#slide=id.g254d13a99af_2_436"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leanin}
              isBlog={false}
              title="Web Development Mentorship"
              description="A mentorship initiative to guide and teach students web design, modern front-end technologies, and best practices in development. The project provides hands-on lessons and real-world examples."
              ghLink="https://github.com/Violetcv/LeanIN-Mentorship"
              demoLink="https://lean-in-mentorship.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={art}
              isBlog={false}
              title="ArtVerse"
              description="ArtVerse is a platform that brings metropolitan museum artwork to a broader audience. Users can explore curated pieces, learn about art history, and enjoy a seamless online art experience."
              ghLink="https://drive.google.com/file/d/1vVfuBZy9OYMSjxIWYN_GQPqBe8Xq0Kpt/view"
              demoLink="https://met-museum-artwork.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={heart}
              isBlog={false}
              title="Heart Disease Prediction"
              description="A machine learning project that predicts the likelihood of heart disease using the UCI Heart Disease dataset. Models such as K Neighbors, Random Forest, and Decision Tree were used, achieving accuracies around 85%, 82%, and 73% respectively."
              ghLink="https://github.com/Violetcv/disease-prediction"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={digit}
              isBlog={false}
              title="Handwritten Character Recognition"
              description="A project on handwritten digit recognition utilizing Logistic Regression to achieve approximately 97.7% accuracy. It demonstrates data pre-processing, model training, and interactive testing on the MNIST dataset."
              ghLink="https://github.com/Violetcv/handwriting-character-recognition"
              demoLink="https://handwritten-digit-recognition.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={credit}
              isBlog={false}
              title="Credit Scoring using Logistic Regression"
              description="Developed a credit scoring model with an accuracy of 83.3% using logistic regression. The project explores a dataset of 30 variables with 3000 observations and emphasizes data cleaning and feature selection."
              ghLink="https://github.com/Violetcv/credit-scoring-model"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
