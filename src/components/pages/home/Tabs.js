import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import images from "../../Images.js";
import icons from "../../Icons.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CreateTabs() {
  return (
    <>
      <div className="d-none d-md-block tabs">
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example" className="">
          <Tab eventKey={1} title="First" className="p-4">
            <CreateTab source={images.tab[0]} />
          </Tab>
          <Tab eventKey={2} title="Second" className="p-4">
            <CreateTab source={images.tab[1]} />
          </Tab>
          <Tab eventKey={3} title="Third" className="p-4">
            <CreateTab source={images.tab[2]} />
          </Tab>
        </Tabs>
      </div>
      <div className="d-block d-md-none">
        <Accordion defaultActiveKey={1}>
          <CreateAccordicon
            source={images.tab[0]}
            eventKey={1}
            itemName="First"
          />
          <CreateAccordicon
            source={images.tab[1]}
            eventKey={2}
            itemName="Second"
          />
          <CreateAccordicon
            source={images.tab[2]}
            eventKey={3}
            itemName="Third"
          />
        </Accordion>
      </div>
    </>
  );
}

function CreateTab(props) {
  return (
    <Row>
      <Col>
        <img className="d-block w-30" src={props.source} alt={"tabs-image"} />
      </Col>
      <Col>
        <div>
          <p className="general-text">
            Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
            venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
            ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
            condimentum mattis rhoncus.
          </p>
          <Share />
        </div>
      </Col>
    </Row>
  );
}

function Share() {
  return (
    <>
      <div className="d-flex align-items-center">
        <p className="d-inline m-0 me-3 sub-heading-text">SHARE</p>
        <FontAwesomeIcon
          style={{ height: "2em" }}
          className="me-3 sub-heading-text"
          icon={icons.facebook}
        />
        <FontAwesomeIcon
          style={{ height: "2em" }}
          className="sub-heading-text"
          icon={icons.twitter}
        />
      </div>
    </>
  );
}

function CreateAccordicon(props) {
  return (
    <Accordion.Item eventKey={props.eventKey}>
      <Accordion.Header>{props.itemName}</Accordion.Header>
      <Accordion.Body>
        <div className="p-3">
          <p>
            Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
            venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
            ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
            condimentum mattis rhoncus.
          </p>
          <img
            className="d-block w-100"
            src={props.source}
            alt={"accordion-image"}
          />
          <div className="mt-3 d-flex justify-content-center">
            <Share />
          </div>
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default CreateTabs;
