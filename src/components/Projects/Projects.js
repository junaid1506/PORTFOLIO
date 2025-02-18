import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
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
              title="E-Commerce"
              description="An E-commerce React App allows users to browse, search, and purchase products online. It features a shopping cart, secure checkout, and payment integration. Users can register and log in for a personalized experience. An admin dashboard manages products, orders, and users. Built with React and often using the MERN stack, it ensures a smooth and responsive UI."
              ghLink="https://github.com/junaid1506/Ecommerce"
              demoLink="https://ecommerce-two-ebon-26.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Social Media Application"
              description="A Social Media Application built with React provides a simple template for user interaction. It includes basic features like profile creation, posting updates, and viewing shared content. The UI is responsive and optimized for smooth navigation. Users can explore a minimal yet functional design. This template serves as a foundation for further development and customization."
              ghLink="https://github.com/junaid1506/MY-MEMO"
              demoLink="https://junaid1506.github.io/MY-MEMO/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Weather Application"
              description="A Weather Application built with React allows users to check real-time weather updates for any location. It typically displays current weather conditions like temperature, humidity, wind speed, and forecasts for the coming days. The app uses an API to fetch weather data and provides a simple, user-friendly interface"
              ghLink="https://github.com/junaid1506/WEATHER_APPLICATION"
              demoLink="https://junaid1506.github.io/WEATHER_APPLICATION/"              
            />
          </Col>

         

      
         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
