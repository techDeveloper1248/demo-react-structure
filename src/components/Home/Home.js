import React, { Component } from "react";
import { Row, Container } from "react-bootstrap";
// import { AgentActions } from "../../../store/actions";
import { connect } from "react-redux";
// import * as EmailValidator from 'email-validator'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
// import { SpinnerDark } from "../../../assets/img";
import "./Home.scss";
import { Link } from "react-router-dom";

// let connectProps = {
//   // ...AgentActions
// };

// let connectState = state => ({
//   // currentAgent: state.Agent.current
// });

// let enhancer = connect(connectState, connectProps);

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
      <form className="w-100" onSubmit={this.signIn}>
        <div
          className="d-flex justify-content-center flex-column position-relative border-left border-right border-dark"
          style={{ height: "100vh" }}
        >
          <Row className="ml-2 mb-3 w-100 header">
            {/* <FontAwesomeIcon
              icon={faChevronLeft}
              className="float-right ml-1 mt-3"
              style={{ width: "25px", height: "25px", cursor: "pointer" }}
              // onClick={ () => history.goBack() }/>
            /> */}
          </Row>

          <h4
            className="text-center mt-4 heading font-weight-light"
            style={{ fontFamily: "Montserrat-Regular" }}
          >
            Proceed with your
            <p style={{ fontFamily: "Montserrat-bold" }}>Login</p>
          </h4>

          <Container className="text-center mt-5">
            <input
              autoFocus
              ref={this.emailRef}
              className={`border-top-0 border-left-0 border-right-0 w-75 ${
                error["type"] === "email" ? "border-danger" : ""
              }`}
              style={{ fontFamily: "Montserrat-Regular" }}
              placeholder="email"
              value={"email"}
              onChange={e => this.changeText(e, "email")}
            />

            <input
              ref={this.passwordRef}
              type="password"
              className={`border-top-0 border-left-0 border-right-0 mt-4 w-75 ${
                error["type"] === "password" ? "border-danger" : ""
              }`}
              style={{ fontFamily: "Montserrat-Regular" }}
              placeholder="password"
              value={"password"}
              onChange={e => this.changeText(e, "password")}
            />

            <p
              className={`text-danger ${error["type"] === "" ? "d-none" : ""}`}
            >
              <small style={{ fontFamily: "Montserrat-Regular" }}>
                {error["message"]}
              </small>
            </p>

            <p className="text-right mr-4 p-3">
              <small style={{ fontFamily: "Montserrat-Regular" }}>
                Forgot password?
              </small>
            </p>

            <div className="text-right mt-2 mr-4 p-2">
              <button
                className="bg-transparent text-dark border-0"
                style={{ fontFamily: "Anton-Regular" }}
              >
                {/* {formSubmitting ? (
                  <img src={SpinnerDark} alt="loading" width="40" height="40" />
                ) : (
                  "Login"
                )} */}
              </button>
            </div>

            <Link to={"/agents/signup"}>
              <p>
                <small style={{ fontFamily: "Montserrat-Regular" }}>
                  Don't have an account?
                </small>
              </p>
            </Link>
          </Container>
        </div>
      </form>
    );
  }
}

export default HomePage;
