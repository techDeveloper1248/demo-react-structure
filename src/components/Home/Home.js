import React, { Component } from "react";
import { NewsActions } from "../../store/actions";
import { connect } from "react-redux";
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
  news: state.News.current
});

let enhancer = connect(connectState, connectProps);

class HomePage extends Component {
  componentDidMount() {
    this.props.getNews({});
  }

  render() {
    let news = this.props.news.news || [];

    return (
      <div>
        <NavHeader props={this.props} />
        <Container
          fluid
          style={{ backgroundColor: "white", flex: 1 }}
          className="justify-content-center align-items-center  mt-5"
        >
          <ListGroup className="parent-list  mx-auto ">
            {news.map((item, index) => {
              return (
                <ListGroup.Item
                  className="parent-list text-left"
                  action={true}
                  href={item.url ? item.url : "#"}
                  target="_blank"
                  variant=""
                >
                  {index + 1}. {item.title}
                  <br />
                  <text style={{ fontSize: 10 }}>{item.time_ago}</text>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Container>
      </div>
    );
  }
}

export default enhancer(HomePage);
