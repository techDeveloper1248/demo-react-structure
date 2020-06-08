import React, { Component } from "react";
// import { AgentActions } from "../../../store/actions";
import { connect } from "react-redux";
// import * as EmailValidator from 'email-validator'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
// import { SpinnerDark } from "../../../assets/img";
import { Link } from "react-router-dom";
// let connectProps = {
//   // ...AgentActions
// };

// let connectState = state => ({
//   // currentAgent: state.Agent.current
// });

// let enhancer = connect(connectState, connectProps);

import logo from "../../logo.svg";

import {
  Row,
  Col,
  Container,
  Badge,
  Button,
  ButtonGroup,
  Navbar,
  Nav,
  ToggleButton,
  Card,
  Dropdown,
  Jumbotron,
  DropdownButton
} from "react-bootstrap";

class NavHeader extends Component {
  render() {
    const { history } = this.props;

    const pathname = "/jobs";
    console.log("---", history);
    return (
      <Container
        fluid
        style={{ backgroundColor: "#ffc108" }}
        className="justify-content-xs-left"
      >
        <Navbar variant="light" className="nav-bg">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Hacker News Feeds
          </Navbar.Brand>

          <Nav className="ml-auto">
            <Nav.Link href="#deets">News</Nav.Link>

            <Nav.Link eventKey={2} href="#memes">
              Newest
            </Nav.Link>

            <Nav.Link eventKey={2} href="#memes">
              Ask
            </Nav.Link>

            <Nav.Link to="/show" activeClassName="font-weight-bold underline">
              Show
            </Nav.Link>

            <Nav.Link
              eventKey={2}
              href="#memes"
              className={`header-btn ml-1 underline ${
                pathname === "/jobs" ? "text-white" : "text-dark"
              }`}
            >
              Job
            </Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    );
  }
}

export default NavHeader;
