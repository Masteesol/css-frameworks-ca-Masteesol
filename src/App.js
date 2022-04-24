import Container from "react-bootstrap/Container";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/pages/contact/Contact.js";
import News from "./components/pages/news/News.js";
import Home from "./components/pages/home/Home.js";
import Nav from "./components/layout/Nav.js";
import Footer from "./components/layout/Footer.js";
import Heading from "./components/layout/Heading.js";
import Carousel from "./components/pages/home/Carousel.js";
import "./sass/styles.scss";

const currentPath = window.location.pathname;

let hideHeader = "";
let hideCarousel = "";

if (currentPath === "/") {
  hideHeader = "d-none";
  hideCarousel = "d-block";
} else {
  hideHeader = "d-block";
  hideCarousel = "d-none";
}

function App() {
  return (
    <Container fluid className="main-container p-0">
      <Nav />
      <div className={hideCarousel}>
        <Carousel />
      </div>
      <Container md>
        <div className={hideHeader} style={{ paddingTop: "5em" }}>
          <Heading />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="news" element={<News />} />
        </Routes>
      </Container>
      <Footer />
    </Container>
  );
}

export default App;
