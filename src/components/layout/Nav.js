import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const currentPathName = window.location.pathname;

const links = ["/", "/contact", "/news"];

const AddLinks = links.map((item, index) => {
  let status = "";
  let hrefName = item;
  let navText = "";
  if (currentPathName === item) {
    status = "white";
  }
  switch (item) {
    case "/":
      navText = "Home";
      break;
    case "/news":
      navText = "News";
      break;
    case "/contact":
      navText = "Contact";
      break;
  }
  console.log(navText);
  return (
    <Nav.Link
      key={"link-" + index}
      style={{ backgroundColor: status }}
      href={hrefName}
    >
      {navText}
    </Nav.Link>
  );
});

function CreateNavbar() {
  return (
    <Navbar
      bg=""
      expand="lg"
      className="position-fixed w-100"
      style={{ zIndex: "100" }}
    >
      <Container fluid>
        <Navbar.Brand href="/" className="ms-lg-5 ms-2 me-5">
          The YAY Company
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {AddLinks}
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Go</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CreateNavbar;
