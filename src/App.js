import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";
import { Row, Container, Grid } from "react-bootstrap";

function App() {
  return (
    <Container className="App-header" fluid={true}>
      <Link to={"/user/homePage"}>
        <p>
          <small
            style={{
              fontFamily: "Montserrat-Regular",
              color: "black",
              fontSize: 20
            }}
          >
            Navigate to Home
          </small>
        </p>
      </Link>
    </Container>
  );
}

export default App;
