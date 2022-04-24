import React from "react";
import CreateCard from "./Card.js";
import Nav from "./Nav.js";
import images from "../../Images.js";
import Row from "react-bootstrap/Row";

function News() {
  return (
    <>
      <div className="mt-5 mb-5">
        <Nav />
      </div>
      <Row className="g-1 justify-content-center">{Cards}</Row>
      <div className="mt-5 mb-5">
        <Nav />
      </div>
    </>
  );
}

const Cards = images.news.map((string, index) => {
  const keyName = "card-" + index;
  return <CreateCard key={keyName} content={string} />;
});

export default News;
