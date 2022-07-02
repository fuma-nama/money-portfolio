import { Row, Col, Container } from "react-bootstrap";
import "./Footer.scss";
import UrlBar from "./UrlBar";

export default function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col>
            <h1>MONEY</h1>
          </Col>
          <Col md="auto">
            <UrlBar />
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
