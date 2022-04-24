import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function CreateCard(props) {
  return (
    <Card style={{ width: "18rem", borderRadius: "1rem" }} className="m-2">
      <Card.Img
        variant="top"
        src={props.content}
        style={{
          height: "14rem",
          objectFit: "cover",
          borderRadius: "1rem 1rem 0rem 0rem",
        }}
      />
      <Card.Body>
        <Card.Title class="sub-heading-text">Nunc porttitor vel</Card.Title>
        <Card.Text class="general-text">
          Nunc malesuada eget est fringilla dapibus.
        </Card.Text>
        <div className="d-grid">
          <Button variant="primary">More</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CreateCard;
