import React, { Component, Fragment } from "react";
import { NewsActions } from "../../store/actions";
import { connect } from "react-redux";
// import { SpinnerDark } from "../../../assets/img";
import "./AccountDetails.scss";
import { Link } from "react-router-dom";
import NavHeader from "../../shared/Header";
import wave from "../../assets/back.png";

import {
  Row,
  Col,
  Container,
  Badge,
  Button,
  Image,
  ButtonGroup,
  Navbar,
  Nav,
  ToggleButton,
  Card,
  Dropdown,
  ListGroup,
  Jumbotron,
  DropdownButton,
  Form
} from "react-bootstrap";

let connectProps = {
  ...NewsActions
};

let connectState = state => ({
  news: state.News.current
});

let enhancer = connect(connectState, connectProps);

class AccountDetails extends Component {
  componentDidMount() {
    this.props.getNews({});
  }

  render() {
    let news = this.props.news.news || [];

    return (
      <div>
        <NavHeader props={this.props} />
        <Container className="margin text-center">
          <h3>Account Details</h3>

          <Row className="justify-content-center mt-3">
            <div
              className="align-self-center col-md-2 "
              style={{
                position: "relative"
              }}
            >
              <Image
                style={{ width: "100px", height: "100px" }}
                src={wave}
                roundedCircle
              />

              <Button
                style={{ position: "absolute", bottom: 0, right: -20 }}
                variant=""
                type="submit"
                className="bg-transparent"
              >
                Update
              </Button>
            </div>
          </Row>

          <Fragment>
            <Form.Group
              as={Row}
              controlId="email"
              className="justify-content-center mt-5 "
            >
              <Col md={5} className="text-left">
                <Form.Control
                  type="text"
                  className=" font-montserrat-Regular"
                  // onChange={e => handleOnChange("firstName", e.target.value)}
                  value={""}
                  required
                />

                <label className="form-control-placeholder" htmlFor="email">
                  Email
                </label>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              controlId="first_name"
              className="justify-content-center"
            >
              <Col md={5} className="text-left">
                <Form.Control
                  type="text"
                  className=" font-montserrat-Regular"
                  // onChange={e => handleOnChange("firstName", e.target.value)}
                  value={""}
                  required
                />

                <label
                  className="form-control-placeholder"
                  htmlFor="first_name"
                >
                  First Name
                </label>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              controlId="last_name"
              className="justify-content-center"
            >
              <Col md={5} className="text-left">
                <Form.Control
                  type="text"
                  className=" font-montserrat-Regular"
                  // onChange={e => handleOnChange("firstName", e.target.value)}
                  value={""}
                  required
                />

                <label className="form-control-placeholder" htmlFor="last_name">
                  Last Name
                </label>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              controlId="contact"
              className="justify-content-center mt-3 "
            >
              <Col md={5} className="text-left">
                <Form.Control
                  type="text"
                  className=" font-montserrat-Regular"
                  // onChange={e => handleOnChange("firstName", e.target.value)}
                  value={""}
                  required
                />

                <label className="form-control-placeholder" htmlFor="contact">
                  Contact Number
                </label>
              </Col>
            </Form.Group>
          </Fragment>

          <h3 className="mt-5 mb-5">Payment Options</h3>

          <Row
            style={{
              paddingLeft: "40px",
              paddingRight: "40px"
            }}
            className="align-items-center justify-content-center "
          >
            <div className="col-md-5 p-2 button-shadow bg-white d-flex align-items-center justify-content-between">
              <span>**** **** **** 1234</span>
              <button>Delete</button>
            </div>
          </Row>

          <Row className=" align-items-center justify-content-center pl-3 pr-3">
            <div className="col-md-5 ">
              <span className="float-right text-primary">+ Add New</span>
            </div>
          </Row>

          <h3 className="mt-5 mb-5">Linked Accounts</h3>

          <Row
            style={{
              paddingLeft: "40px",
              paddingRight: "40px"
            }}
            className="align-items-center justify-content-center "
          >
            <div className="col-md-5 p-2 button-shadow bg-white d-flex align-items-center justify-content-between">
              <span>Google</span>
              <Button variant="" type="submit" className="bg-white">
                Disconnect
              </Button>
            </div>
          </Row>

          <h3 className="mt-5 mb-5">Manage Passwords</h3>
          <h6>To change your password, you have to enter old password</h6>

          <Form.Group
            as={Row}
            controlId="contact"
            className="justify-content-center mt-3 "
          >
            <Col md={5} className="text-left">
              <Form.Control
                type="text"
                className=" font-montserrat-Regular"
                // onChange={e => handleOnChange("firstName", e.target.value)}
                value={""}
                required
              />

              <label className="form-control-placeholder" htmlFor="contact">
                Password
              </label>
            </Col>
          </Form.Group>
        </Container>
      </div>
    );
  }
}

export default enhancer(AccountDetails);
