import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.scss";
import React from "react";
import Header from "./components/Header";
import {Container} from "react-bootstrap";

function App() {
  return (
    <Container className="app" fluid>
      <Header/>
    </Container>
  );
}

export default App;