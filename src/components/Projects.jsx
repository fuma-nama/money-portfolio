import { Row, Col, Container } from "react-bootstrap";
import { ArrowRightCircleFill, ArrowReturnRight } from "react-bootstrap-icons";
import "./Projects.scss";

const projects = [
  {
    img: "img/projects/bjda.svg",
    name: "BJDA",
    description: "A Kotlin Discord API Framework for building interactive bots",
  },
  {
    img: "img/projects/yeecord.png",
    name: "Yeecord HomePage",
    description: "The Home Page of popular discord bot Yeecord",
  },
  {
    img: "img/projects/todo.svg",
    name: "Todo bot",
    description: "A Discord bot for logging todos",
  },
  {
    img: "img/projects/u3.png",
    name: "Project U3",
    description:
      "A full-featured Chat App with a java-only frontend and backend server",
  },
];

export default function Projects() {
  return (
    <Container className="project-container">
      <h1 className="primary-text">Projects</h1>
      <p>I did many cool projects for different peoples, communities</p>
      <a href="https://github.com/SonMooSans">
        <button>
          Learn More <ArrowRightCircleFill size={25} />
        </button>
      </a>
      <Row className="project-wrapper">
        <Col md="auto" className="arrow-col">
          <ArrowReturnRight className="arrow" size={200} />
          <p>Current</p>
        </Col>
        <Col>
          <ProjectsGrid />
        </Col>
      </Row>
    </Container>
  );
}

function ProjectsGrid() {
  return (
    <Container>
      <Row className="gap-3">
        {projects.map((project) => (
          <Project key={project.name} {...project} />
        ))}
      </Row>
    </Container>
  );
}

function Project({ img, name, description }) {
  return (
    <Col className="project grid-item">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
    </Col>
  );
}
