import React from "react";
import { Card, Row, Button, Container, Image, Col } from "react-bootstrap";
import NavHeader from "../../shared/Header";
import back from "../../assets/back.png";
import wave from "../../assets/wave.png";
import phone from "../../assets/phone.png";
import appStore from "../../assets/appStore.png";
import playStore from "../../assets/playStore.png";
import "./Advertise.scss";

const SingleCard = props => {
  return (
    <Card style={{ position: "relative" }}>
      <div className="hover">
        <Card.Img style={{ height: 250, zIndex: 2 }} variant="top" src={back} />
      </div>

      <Card.Body
        className="border bg-white"
        style={{
          position: "absolute",
          bottom: -30,
          left: "5px",
          right: "5px",
          zIndex: 0
        }}
      >
        <Card.Title>Nails</Card.Title>
        <Card.Text style={{ maxWidth: "80%" }}>
          Soak-off gel manicure, Paraffin manicure, Brazillian manicure, Shellac
          manicure.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

const Advertise = props => {
  return (
    <div>
      <NavHeader props={props} />

      <div>
        <Image
          src={back}
          style={{ backgroundSize: "contain", width: "100%", height: "600px" }}
        />
        <h2>
          Making Health and Beauty
          <br />
          Convenient and At Home
        </h2>

        <Row className="justify-content-center card-height">
          <Card
            border="light"
            className="col-sm-8"
            style={{ backgroundColor: "transparent", borderWidth: 0 }}
          >
            <Card.Body className="card-padding">
              <Row
                className="justify-content-center border"
                style={{ backgroundColor: "white" }}
              >
                <Col className="col-sm-3 border-right  mt-3 mb-3">
                  <h5>Services</h5>
                  <h6 className="card-text">Nails</h6>
                </Col>
                <Col className="col-sm-3 border-right mt-3 mb-3">
                  <h5>Date & time</h5>
                  <h6 className="card-text">22/05/2020 6:30 AM</h6>
                </Col>
                <Col className="col-sm-3 p-3 ">
                  <h5>Location</h5>
                  <h6 className="card-text">Old louisville</h6>
                </Col>
                <Col className="col-sm-3 p-3">
                  <button class="button button1">Search</button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Row>
      </div>

      <div className="ml-5 mr-5  margin">
        <h4>POPULAR SERVICES</h4>

        <div className="scrollMenu">
          <Row>
            <SingleCard />
            <SingleCard />
            <SingleCard />
            <SingleCard />
            <SingleCard />
          </Row>
        </div>
      </div>

      <div className="margin image">
        <Image
          src={wave}
          style={{ backgroundSize: "contain", width: "100%", height: "400px" }}
        />

        <Image
          src={phone}
          style={{
            backgroundSize: "contain",
            height: "400px",
            position: "absolute",
            top: "-20%",
            left: "10%"
          }}
        />

        <div className="play-store">
          <Row className="justify-content-center">
            <h3 className="text-white">
              <span style={{ fontSize: 20 }}>GET THE</span> GROOMUR{" "}
              <span style={{ fontSize: 20 }}>APP</span>
            </h3>
          </Row>
          <h6 className="get-text">
            PLEASE VIST APP STORE AND GOOGLE PLAY STORE TO DOWNLOAD GROOMUR APP
          </h6>

          <Row className="justify-content-center align-items-center">
            <div className="zoom ">
              <input
                // id="image"
                type="image"
                width="160"
                height="60"
                src={appStore}
              />
            </div>

            <div className="zoom" style={{ padding: 30 }}>
              <input
                // id="image"
                type="image"
                width="140"
                height="40"
                src={playStore}
              />
            </div>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Advertise;
