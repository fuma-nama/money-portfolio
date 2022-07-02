import "./Skills.scss";
import { Container, Row, Col } from "react-bootstrap";

export default function Skills() {
  return (
    <Container className="skills-container">
      <Row className="gap-3">
        <Col xs={12} md={7} xl={6} className="skills-bg">
          <h1 className="primary-text">Skills</h1>
          <p>
            I had been done almost all the types of projects.
            <br />
            Including Frameworks, APIs, Backend Servers, website, Native
            Applications.
          </p>
        </Col>
        <Col sm>
          <SkillsGrid />
        </Col>
      </Row>
    </Container>
  );
}

const skills = [
  {
    years: 10,
    name: "Backend",
  },
  {
    years: 4,
    name: "Framework development",
  },
  {
    years: 5,
    name: "UI Design",
  },
  {
    years: 9,
    name: "Web development",
  },
];

function SkillsGrid() {
  return (
    <Container>
      <Row className="gap-3">
        {skills.map((skill) => (
          <SkillItem {...skill} />
        ))}
      </Row>
    </Container>
  );
}

function SkillItem({ years, name }) {
  return (
    <Col sm className="skill-item grid-item">
      <h3 className="primary-text">{`${years} Years`}</h3>
      <p>{name}</p>
    </Col>
  );
}
