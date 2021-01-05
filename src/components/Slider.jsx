import React from "react";
import { Container, Carousel } from "react-bootstrap";

const Slider = (props) => (
  <Container fluid className="m-0 p-0 slider">
    <Carousel>
      {props.images.map((image, index) => {
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={image} alt="First slide" />
        </Carousel.Item>;
      })}

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./assets/places/fc618d01-adcc-465c-af4f-14713e0e3a2a.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./assets/places/fc618d01-adcc-465c-af4f-14713e0e3a2a.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  </Container>
);

export default Slider;
