import { useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const [activeTab, setActiveTab] = useState("first"); 

  const projects = [
    {
      title: "Inventory Management System",
      description: "Warehouse that helps you manage your stock",
      imgUrl: projImg1,
      link: "https://inventorymanagementsystem-production-cafa.up.railway.app"
    },
    {
      title: "Frontend Movie App",
      description: "Website that helps you find movies",
      imgUrl: projImg2,
      link: "https://movie-hub-testo.netlify.app/"
    },
    {
      title: "E-Commerce",
      description: "E-commerce website that helps you find products",
      imgUrl: projImg3,
      link: "https://e-commerce-cst-project-production.up.railway.app"
    },
  ];

  // Define headers for each tab
  const tabHeaders = {
    first: "Projects",
    second: "Experience"
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                {/* Dynamically update the header based on the active tab */}
                <h2>{tabHeaders[activeTab]}</h2>
                <p>Below are web development projects that reflect my practical experience with front-end and back-end technologies. They demonstrate my ability to build functional, user-oriented applications using modern web frameworks and tools.</p>
                <Tab.Container
                  id="projects-tabs"
                  defaultActiveKey="first"
                  onSelect={(selectedKey) => setActiveTab(selectedKey)} // Update active tab on selection
                >
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>
                        During my time at the Information Technology Institute (ITI), I deepened my expertise in full-stack development using Python, Django, and modern front-end tools.
                        I also interned at Swft, where I worked closely with senior engineers, assisted in debugging, and optimized code for better performance.
                        These experiences sharpened both my technical and team collaboration skills.
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="pic"></img>
    </section>
  )
}