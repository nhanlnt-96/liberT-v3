import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.scss";
import React from "react";
import {Container} from "react-bootstrap";
import Banner from "./components/Banner";
import About from "./components/About";

function App() {
  return (
    <Container className="app" fluid>
      <Banner/>
      <About/>
    </Container>
  );
}

export default App;