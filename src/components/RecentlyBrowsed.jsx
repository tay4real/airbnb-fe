import React from "react";
import { Container, Carousel } from "react-bootstrap";

const RecentlyBrowsed = (props) => (
  <Container fluid className="m-0 p-0 slider">
    <Carousel>
      <Carousel.Item>{props.slider}</Carousel.Item>
    </Carousel>
  </Container>
);

export default RecentlyBrowsed;
