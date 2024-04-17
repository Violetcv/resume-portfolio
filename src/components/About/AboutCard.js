import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Chhavi Verma </span>
            from <span className="purple"> Delhi, India.</span>
            <br />
            I am currently studying Artificial Intelligence and Machine Learning at Indira Gandhi Delhi Technical University for Women.
            <br />
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Creating Hex Color Pallettes
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Striving to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Chhavi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
