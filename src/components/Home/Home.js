import React, { Component } from "react";
// import { AgentActions } from "../../../store/actions";
import { connect } from "react-redux";
// import * as EmailValidator from 'email-validator'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
// import { SpinnerDark } from "../../../assets/img";
import "./Home.scss";
import { Link } from "react-router-dom";
import NavHeader from "../../shared/Header";

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
// import "./App.css";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      formSubmitting: false,
      error: { type: "", message: "" }
    };

    // this.emailRef = React.createRef();
    // this.passwordRef = React.createRef();
  }

  changeText = (e, id) => {
    this.setState({ [id]: e.target.value });
  };

  signIn = async e => {
    // e.preventDefault();
    // const { email, password } = this.state
    // if(email === '') {
    //   this.setState({
    //     error:
    //     {
    //       type: 'email',
    //       message: "Email can't be empty"
    //     }
    //   })
    //   this.emailRef.current.focus();
    // }
    // else if(password === '') {
    //   this.setState({
    //     error:
    //     {
    //       type: 'password',
    //       message: "Password can't be empty"
    //     }
    //   })
    //   this.passwordRef.current.focus();
    // }
    // else if(!EmailValidator.validate(email)) {
    //   this.setState({
    //     error:
    //     {
    //       type: 'email',
    //       message: "Invalid Email!"
    //     }
    //   })
    //   this.emailRef.current.focus();
    // }
    // else {
    //   this.setState({ formSubmitting: true })
    //   let payload = {
    //     email,
    //     password
    //   }
    //   const data = await this.props.signIn(payload)
    //   this.setState({ formSubmitting: false })
    //   console.log(data)
    //   if(!data.isError) {
    //     this.props.history.push('/agent-dashboard');
    //   }
    //   else {
    //     this.setState({
    //       error:
    //       {
    //         type: 'error',
    //         message: "Wrong email or password!"
    //       }
    //     })
    //   }
    // }
  };

  render() {
    // const { history } = this.props;
    const { email, password, formSubmitting, error } = this.state;

    return (
      <div>
        <NavHeader />
        <Container
          fluid
          style={{ backgroundColor: "white", flex: 1 }}
          className="justify-content-center align-items-center  mt-5"
        >
          <Row className="justify-content-center">
            <h1>Home page</h1>
          </Row>
        </Container>
      </div>
    );
  }
}

export default HomePage;
