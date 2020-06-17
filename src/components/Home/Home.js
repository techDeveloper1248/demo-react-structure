import React, { Component } from "react";
import { NewsActions } from "../../store/actions";
import { connect } from "react-redux";
// import * as EmailValidator from 'email-validator'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
// import { SpinnerDark } from "../../../assets/img";
import "./Home.scss";
import { Link } from "react-router-dom";
import NavHeader from "../../shared/Header";

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
  ListGroup,
  Jumbotron,
  DropdownButton
} from "react-bootstrap";

let connectProps = {
  ...NewsActions
};

let connectState = state => ({
  // currentAgent: state.Agent.current
});

let enhancer = connect(connectState, connectProps);

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      formSubmitting: false,
      error: { type: "", message: "" }
    };
  }

  componentDidMount() {
    this.props.getNews({});
  }

  changeText = (e, id) => {
    this.setState({ [id]: e.target.value });
  };

  signIn = async e => {};

  render() {
    const { email, password, formSubmitting, error } = this.state;

    return (
      <div>
        <NavHeader props={this.props} />
        <Container
          fluid
          style={{ backgroundColor: "white", flex: 1 }}
          className="justify-content-center align-items-center  mt-5"
        >
          <ListGroup className="parent-list  mx-auto ">
            <ListGroup.Item
              className="parent-list  text-center"
              action
              href="#link1"
            >
              Link 1
            </ListGroup.Item>

            <ListGroup.Item
              className="parent-list  text-center"
              action
              href="#link1"
            >
              Link 1
            </ListGroup.Item>
            <ListGroup.Item
              className="parent-list  text-center"
              action
              href="#link1"
            >
              Link 1
            </ListGroup.Item>
            <ListGroup.Item
              className="parent-list  text-center"
              action
              href="#link1"
            >
              Link 1
            </ListGroup.Item>
            <ListGroup.Item
              className="parent-list  text-center"
              action
              href="#link1"
            >
              Link 1
            </ListGroup.Item>
            <ListGroup.Item
              className="parent-list  text-center"
              action
              href="#link1"
            >
              Link 1
            </ListGroup.Item>
          </ListGroup>
        </Container>
      </div>
    );
  }
}

export default enhancer(HomePage);
