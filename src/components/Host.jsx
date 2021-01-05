import React, { Component } from "react";
import { Container, Image, ListGroup } from "react-bootstrap";

export default class host extends Component {
  render() {
    return (
      <Container fluid>
        <div id="host_start_listing" className="d-flex flex-column">
          <div className="row">
            <Image
              src="../assets/airbnb-black.png"
              width="32"
              alt="airbnb logo"
            />
          </div>
          <div>
            <div></div>
            <div>
              <div className="card rounded">
                <div>
                  Tell us more about your place and we'll update your estimate
                </div>
                <ListGroup variant="flush">
                  <ListGroup.Item>Address</ListGroup.Item>
                  <ListGroup.Item>
                    <span>Entire place</span> <span></span>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span>4 guests</span> <span></span>
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
