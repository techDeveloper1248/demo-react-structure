import React, { Component } from "react";
// import { AgentActions } from "../../../store/actions";
import { connect } from "react-redux";
// import * as EmailValidator from 'email-validator'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
// import { SpinnerDark } from "../../../assets/img";
import { Link } from "react-router-dom";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.scss";
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

    const pathname = this.props.props.location.pathname;

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

          <Nav className="ml-auto ">
            <NavLink
              to="/user/homePage"
              className={`header-btn ${
                pathname === "/user/homePage" || pathname === "/"
                  ? "text-white font-weight-bold underline"
                  : "text-dark"
              }`}
            >
              News
            </NavLink>

            <NavLink
              to="/user/Newest"
              className={`header-btn ${
                pathname === "/user/Newest"
                  ? "text-white font-weight-bold underline"
                  : "text-dark"
              }`}
            >
              Newest
            </NavLink>

            <NavLink
              to="/user/Ask"
              className={`header-btn ${
                pathname === "/user/Ask"
                  ? "text-white font-weight-bold underline"
                  : "text-dark"
              }`}
            >
              Ask
            </NavLink>

            <NavLink
              to="/user/Show"
              className={`header-btn ${
                pathname === "/user/Show"
                  ? "text-white font-weight-bold underline"
                  : "text-dark"
              }`}
            >
              Show
            </NavLink>

            <NavLink
              to="/user/Jobs"
              className={`header-btn ${
                pathname === "/user/Jobs"
                  ? "text-white font-weight-bold underline"
                  : "text-dark"
              }`}
            >
              Jobs
            </NavLink>
          </Nav>
        </Navbar>
      </Container>
    );
  }
}

export default NavHeader;
