import { Container, Row, Col } from "react-bootstrap";
import "./Contact.scss";
import { Files } from "react-bootstrap-icons";

const invite_link = "https://discord.gg/QmgmFhg";
export default function Contact() {
  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col size={11} md={5}>
            <img src="img/contact.svg" alt="Contact Us" />
          </Col>
          <Col size={12} md={6}>
            <div>
              <h1>Get In Touch</h1>
              <Container className="contact-container">
                <Profile />
                <Community />
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

function Community() {
  return (
    <Container className="community">
      <h2>Join My Community</h2>
      <p>Getting Information, News and Connect!</p>
      <Frame />
      <a href={invite_link}>
        <button>Join Now!</button>
      </a>
    </Container>
  );
}

function Frame() {
  return (
    <iframe
      title="Discord Server"
      src="https://discord.com/widget?id=684766026776576052&theme=dark"
      className="widget"
      allowtransparency="true"
      frameBorder="0"
      sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
    />
  );
}
function Profile() {
  const name = "MONEY#3897";

  const onCopy = () => {
    navigator.clipboard.writeText(name);
  };

  return (
    <Row>
      <Col>
        <img className="contact-icon" src="img/discord.svg" alt="Discord" />
      </Col>
      <Col xs={8}>
        <h2>{name}</h2>
        <p>Contact Me on Discord</p>
        <button onClick={onCopy}>
          Copy <Files />
        </button>
      </Col>
    </Row>
  );
}
