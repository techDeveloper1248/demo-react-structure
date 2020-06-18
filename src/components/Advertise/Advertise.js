import React from "react";
import { Card, Row, Button, Container, Image, Col } from "react-bootstrap";
import NavHeader from "../../shared/Header";
import back from "../../assets/back.png";
import "./Advertise.scss";

const Advertise = props => {
  return (
    <div>
      <NavHeader props={props} />

      <div class="image">
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
            <Card style={{ width: "18rem", borderRadius: 10 }}>
              <Card.Img variant="top" src={back} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem", borderRadius: 10 }}>
              <Card.Img variant="top" src={back} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem", borderRadius: 10 }}>
              <Card.Img variant="top" src={back} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem", borderRadius: 10 }}>
              <Card.Img variant="top" src={back} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem", borderRadius: 10 }}>
              <Card.Img variant="top" src={back} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Advertise;
