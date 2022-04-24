import React from "react";
import Form from "./Form.js";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icons from "../../Icons.js";

const { envelope, phone, location } = icons;

function contact() {
  return (
    <>
      <Row className="general-text">
        <Col xs lg="5" className="d-flex flex-column d-md-none">
          <Address />
        </Col>
      </Row>
      <Row className="justify-content-between general-text">
        <Col xs lg="5">
          <Form />
        </Col>
        <Col xs lg="5" className="d-none d-md-block">
          <Address />
        </Col>
      </Row>
    </>
  );
}

function Address() {
  return (
    <>
      <div className="justify-content-center">
        <Row className="mb-4">
          <Col lg="1" className="w-auto">
            <FontAwesomeIcon
              icon={envelope}
              style={{ height: "2em", width: "2em" }}
            />
          </Col>
          <Col className="">
            <p>hello@yay.com</p>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col lg="1" className="w-auto">
            <FontAwesomeIcon
              icon={phone}
              style={{ height: "2em", width: "2em" }}
            />
          </Col>
          <Col>
            <p>123 456 7890</p>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col lg="1" className="w-auto">
            <FontAwesomeIcon
              icon={location}
              style={{ height: "2em", width: "2em" }}
            />
          </Col>
          <Col>
            <div>
              <p>123 Some Street</p>
              <p>Somewhere</p>
              <p>Some City</p>
              <p>10000</p>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default contact;
