import React from "react";

const pathname = window.location.pathname;

let headingText = "Default";

switch (pathname) {
  case "/":
    headingText = "We do YAY things";
    break;
  case "/news":
    headingText = "News";
    break;
  case "/contact":
    headingText = "Submit your details";
    break;
}
function Heading() {
  return <h1>{headingText}</h1>;
}

export default Heading;
