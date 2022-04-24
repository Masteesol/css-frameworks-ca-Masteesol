import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import icons from "../Icons.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const styles = {
  height: "2em",
};

function CreateFooter() {
  return (
    <Row className="footer gx-0">
      <Col md={2} lg className="footer-icons">
        <div className="d-flex m-3 m-md-0 h-100 justify-content-center align-items-center">
          <FontAwesomeIcon
            className="me-2 general-text"
            icon={icons.vimeo}
            style={{ height: styles.height }}
          />
          <FontAwesomeIcon
            className="ms-2 general-text"
            icon={icons.youtube}
            style={{ height: styles.height }}
          />
        </div>
      </Col>
      <Col className="general-text text-center m-3 m-md-0">
        <p className="mt-2 mb-2">hello@yay.com</p>
      </Col>
      <Col className="general-text text-center m-3 m-md-0">
        <p className="mt-2 mb-2">Copyright 2020</p>
      </Col>
    </Row>
  );
}

export default CreateFooter;
