import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { HiPaperAirplane } from "react-icons/hi";

export default function Footer() {
  return (
    <div className="w=100% bg-secondary h-500 d-flex justify-content-center rounded">
      <Container>
        <Row className="bg-dark text-white mt-5 mb-3">
          <Row className="py-3 bg-white">
            <Col className="text-primary"> Subscribe newsletter</Col>
            <Col>
              {" "}
              <InputGroup className="bg-secondary rounded">
                <Form.Control placeholder="Email address" />
                <InputGroup.Text id="basic-addon2">
                  <HiPaperAirplane />
                </InputGroup.Text>
              </InputGroup>
            </Col>

            <Col className="text-primary">
              Call us 24/7 : (+62) 0123 567 789
            </Col>
          </Row>
        </Row>
        <Row className="bg-dark text-white">
          <Col>
            <Row>
              <Col>fdf</Col>
              <Col>fdf</Col>
              <Col>fdf</Col>
            </Row>
          </Col>
          <Col>1 of 1</Col>
          <Col>1 of 1</Col>
          <Col>1 of 1</Col>
        </Row>
      </Container>
    </div>
  );
}
